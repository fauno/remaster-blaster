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
* isolinux o syslinux

## Uso

Preparar la ISO para remasterizar

    remaster trisquel.iso script-de-cambios archivos_extra

Cuando terminamos, remasterizamos:

    makeiso "Juan Carlos Radio"

## HackMenta

    cd hackmenta
    ../remaster mint.iso makementa
    ../makeiso "Hack Menta"

Los archivos adicionales al script makementa se colocan dentro del
directorio `files/` y dentro de la chroot se encuentran en `/tmp`
