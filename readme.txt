Installation de VaudTax 2017
============================

VaudTax ne peut fonctionner que sur les systèmes possédant une installation de Java fonctionnelle et récente (version 8 minimum), les bibliothèques Gnome (GTK et Gnome VFS), ainsi que la bibliothèque utilitaire WebKit.
Les procédures d'installations suivantes ont été testées pour les distributions basées Debian (Ubuntu).

Voici un guide d'installation proposé par un de nos utilisateurs que nous remercions au passage:
https://swisslinux.org/wiki/fr/documentation/why/declaration_d_impots_sous_ubuntu_14.04_lts


Prérequis
---------

- Java 8 minimum (openjdk-8-jre)
- webkit (libwebkitgtk-1.0-0)
- gnome (installé avec openjdk-8-jre)


Installer Java
--------------

- La logithèque ou les dépôts de votre distribution contiennent une version de Java libre permettant de faire fonctionner VaudTax.
Installer le paquet: openjdk-8-jre

- Néanmoins, pour les utilisateurs expérimentés, il est possible d'installer la machine virtuelle Java officielle supportée par Oracle à l'adresse: http://java.com/fr/download


Installer les autres bibliothèques
----------------------------------

- La bibliothèque WebKit: libwebkitgtk-1.0-0

- Les bibliothèques Gnome devraient être installées automatiquement avec le paquet openjdk-8-jre, cependant si tel n'était pas le cas ou si vous avez effectué une installation personnalisée,
les paquets nécessaires sont les suivants:
-- libgnomevfs2-common
-- libgnomevfs2-0
-- libgnome2-common
-- libgnome2-bin libgnome2-0
-- libgnomevfs2-extra


Pour toute question ou informations supplémentaires, merci de contacter le
support à l'adresse: info.aci@vd.ch
