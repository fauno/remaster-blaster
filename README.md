# Remasterizar una ISO debian-like

Remasteriza todas las ISO que usen casper.

## Historia

Estos scripts fueron escritos durante la remasterización de Trisquel en
Juan Carlos Radio.

## Uso

Preparar la ISO para remasterizar

  remaster trisquel.iso

Esto nos deja en una chroot donde podemos trabajar.  Cuando terminamos,
remasterizamos:

  makeiso
