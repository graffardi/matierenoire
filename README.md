# matierenoire

Hello!

# Partie 1: Drupal

**Si à un quelconque moment il faut se log sur le Drupal, les credentials sont matierenoire - matierenoire**

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

**Pour que la partie React fonctionne il faut installer l'extension Chrome suivante:** https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi
**En effet je n'ai pas réussi à mettre en place les CORS sur Drupal malgré toutes mes tentatives de configuration dans default.services.yml et services.yml, j'ai même essayé d'installer des modules deprecated pour y arriver, sans succès.**

# Partie 3: Une fois l'extension installée et activée nous pouvons attaquer le vif du sujet

Pour ce qui est de la partie React.js, je me suis débrouillé comme ceci:

- J'ai importé mon starter habituel: https://github.com/graffardi/react-sample

- J'ai ensuite créé un component Content qui va fonctionner en duo avec le component App. Le component App a toujours la main sur ce qui doit être affiché car cette information est stockée dans son state.

- Je passe une méthode du component App en props de mon component Content pour modifier les informations contenues dans App. (Ce n'était pas la chose la plus judicieuse à faire je le sais, mais cela m'amusait) :)

- J'ai utilisé Reactstrap (qui encapsule Bootstrap dans différents components) pour mettre le tout en forme.

- J'utilise Axios pour mes calls API.

Pour lancer la partie JS, simplement suivre les instructions suivantes:

```
npm install
npm start
```

L'app se lance sur le port 8080 par défaut.

Vous trouverez donc un dump de la DB Drupal à la racine du projet.

Ciao :)