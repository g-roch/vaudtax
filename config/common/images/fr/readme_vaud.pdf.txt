The VD logo vector-file is delivered in encapsulated postscript format (EPS).
Such format is no longer support by iText. The alternative is to convert it
into a regular PDF file and import it as such.

To convert the eps file to pdf on Ubuntu, uses:
ps2pdf -dEPSCrop vaud.eps vaud.pdf

The EPSCrop option force the use of the EPS-defined bounding box. Do not use
the ImageMagick 'convert' command, which do not preserve the vectorial content.