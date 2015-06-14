from os import environ, path

import os.path
from pocketsphinx.pocketsphinx import *
from sphinxbase.sphinxbase import *

# Create a decoder with certain model
config = Decoder.default_config()
config.set_string('-hmm', 'C:/Python27/custom-installs/pocketsphinx-python/pocketsphinx/model/en-us/en-us')
config.set_string('-lm', 'C:/Python27/custom-installs/pocketsphinx-python/pocketsphinx/model/en-us/en-us.lm.dmp')
config.set_string('-dict', 'C:/Python27/custom-installs/pocketsphinx-python/pocketsphinx/model/en-us/cmudict-en-us.dict')
print config
decoder = Decoder(config)

# Decode streaming data.
decoder = Decoder(config)
decoder.start_utt()
stream = open('C:/Python27/custom-installs/pocketsphinx-python/pocketsphinx/test/data/goforward.raw', 'rb')
while True:
  buf = stream.read(1024)
  if buf:
    decoder.process_raw(buf, False, False)
  else:
    break
decoder.end_utt()
print ('Best hypothesis segments: ', [seg.word for seg in decoder.seg()])