# matierenoire

Hello!

# Partie 1: Drupal

Dans un premier temps, je me suis concentré sur l'installation de Drupal. J'ai suivi le tutoriel suivant (n'ayant pas touché à Drupal depuis bien longtemps): https://valuebound.com/resources/blog/drupal-8-installation-in-windows-with-xampp

- J'ai donc installé XAMPP et activé les modules MySQL et APACHE dans le dashboard. 

- J'ai ensuite déplacé le dossier Drupal (drupal-8.5.5) dans le dossier **C:\xampp\htdocs** pour me permettre d'accéder au site Drupal depuis http://localhost/drupal-8.5.5/

- J'ai créé une nouvelle database sous le nom 'drupal' et j'ai procédé à la configuration basique de Drupal.

- Je me suis ensuite attaqué aux modules, dans un premier temps DEVEL Generate. J'ai donc téléchargé le module ici https://www.drupal.org/project/devel et je l'ai placé dans le dossier modules de **drupal C:\xampp\htdocs\drupal-8.5.5\modules**

- J'ai activé les modules DEVEL Generate, RESTful Web Services, Serialization et REST UI depuis l'onglet **Extend**.

- J'ai créé un nouveau type de contenu **News** et j'ai procédé à la génération du contenu via DEVEL Generate (**Configuration / Development / Generate content**)

- Pour terminer, j'ai autorisé le formatage JSON des nodes en important une configuration YAML via cette page: http://localhost/drupal-8.5.5/admin/config/development/configuration/single/import

Le tour est joué, il ne reste plus qu'à utiliser toutes ces données!

# Partie 2: React.js

Incoming...