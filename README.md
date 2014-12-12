# Remasterizar una ISO debian-like

Remasteriza todas las ISO que usen casper.

## Historia

Estos scripts fueron escritos durante la remasterización de Trisquel en
Juan Carlos Radio y mejorados para HackMenta.

## Requisitos

* squashfstools
* libisoburn (o el que tenga `xorriso`)
* genisoimage
* rsync

## Uso

Preparar la ISO para remasterizar

    remaster trisquel.iso script-de-cambios archivos_extra

Cuando terminamos, remasterizamos:

    makeiso "Juan Carlos Radio"

## HackMenta

    cd hackmenta
    ../remaster mint.iso makementa *.patch *.svg *.png
    ../makeiso "Hack Menta"
