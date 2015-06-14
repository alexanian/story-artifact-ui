## Installation notes

Getting pocketsphinx to work on my Windows machine was a bit of a challenge.

I first had to install [Swig](http://www.swig.org/download.html), which was
actually quite simple- just downloade the executable and then add swig.exe
to your path.

Cloning the [pocketsphinx github repo](https://github.com/cmusphinx/pocketsphinx-python)
nearly worked, but I had to manually add __init__.py functions using the `touch` command
in git bash. This problem is described [in this blog post](http://www.chesnok.com/daily/2011/02/09/learning-python-the-hard-way-__init__-py-needed-for-packages-as-opposed-to-modules/).

I have also still not figured out how to properly handle windows filepaths in Python,
as will be evident in the code.