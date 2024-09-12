# Bienvenue dans la formation JS !  
Votre but est de compléter cette application web, en utilisant certaines fonctions qui vous aideront.

## Prerequis (skip si vous avez assisté aux formations):
- Telecharger node.js
- Allez dans le dossier du projet (apres l'avoir cloner)
- Telechargez json-server via la commande : **npm install json-server**

C fini ! Lancez le serveur via la commande:  
**npx json-server db.json**


## Walkthrough des dossiers et fichiers:
- <ins>assets/ :</ins>  
Vous y trouverez les images et le css du site. Ne touchez pas au css, mais soyez libres d'ajouter des img.
- <ins>helper/ :</ins>  
S'y trouvent des fonctions que vous devrez importer pour pouvoir les utiliser.  
Rien de plus simple que :  
**import { LeNomDeLaFonction } from 'CheminDuFichier.js'**  
(PS: N'oubliez pas le '.js' à la fin !!!)
    - <ins>util.js :</ins> Vous y trouverez 2 fonctions qui vous faciliteront les concepts de **window** et **document** qu'on n'a pas vu ensemble:
        - getIdFromUrl: utilisez la pour recuperer l'id dans la barre URL (par ex, #1 veut dire id=1)
        - changeTitle: Utilisez la pour changer le titre de vos pages web
        - navigate: Entrez l'url que vous voulez pour y aller.
    - <ins>fetchProd.js</ins> : c'est LE plus important fichier. Il contient les fonctions permettant de communiquer avec votre json-server. Lisez attentivement les commentaires, ains que la section dédiée dans cette DOC, pour comprendre leur fonctionnement !
- <ins>product/ :</ins> c'est ici que se trouve les fichiers que vous devez completer. Continuez de lire, vous trouverez plus d'infos plus bas.
- <ins>db.json :</ins> C'est votre Base de données.  
Attention !! **Ne jamais avoir 2 produits avec le meme id**.
- <ins>index.html :</ins> l'html de votre Home page (Nos produits)
- <ins>home.js :</ins> Le JS de votre Home page.  
Utilisez **la maniere dont il est structuré** pour vos travaux

PS: Vous travaillerez sur le dossier 'product' pour vos parties à faire.



## Bonus - Explication sur les index.html :
Comme vous pouvez le remarquer, tous les fichiers html sont nommés index.  
**Pourquoi ? C'est pour faciliter les chemins !**

Par exemple, au lieu d'aller sur **/product/index.html**, il suffit d'aller sur **/product**, et le navigateur va automatiquement relier le fichier **index.html** à cet **url**, car c'est un nom special par default !  
Alors que s'il était nommé **autre chose** (product.html par ex), le navigateur **ne saurait quoi afficher**, vous auriez donc eu une page bizzare à la place.



## Explication de fetchProd.js :
Vous y trouverez 5 fonctions utilitaires qui seront utilisée tout au long du projet.  
(PS: ATTENTION aux valeurs de retour ! Les types ne sont pas les memes, lisez attentivement)
- <ins>fetchAllProducts :</ins> Elle n'accepte aucun argument (pas besoin), vu qu'elle vous **retourne un tableau de tous les produits**.

- <ins>fetchProduct :</ins> Elle demande un argument **id**. Elle fetchera le produit ayant ce id et vous **retourne l'object du produit en question**.  
PS: Si cet id n'existe pas, une erreur 404 not found sera produira.

- <ins>createProduct :</ins> Elle necessite 1 argument - **l'object du produit que vous voulez ajouter** .  
Attention!! Il faut que l'object match avec la structure du 'modele' des produits, c'est à dire, avoir les fields suivants:
    - title
    - category
    - price
    - img

(Pas la peine de mettre le field id, il est generé automatiquement)  
<ins>PS:</ins> Retourne la reponse du serveur, pour voir le statut si vous voulez (response.status) (200 par ex si reussie). Vous en aurez pas vraiment besoin pour le chall.

- <ins>editProduct :</ins> Elle demande 2 arguments:
    - **id :** Elle modifiera le produit ayant cet id.
    - **newFields :** Necessite un object contenant les fields du produit à changer.  

Par exemple, lancer **editProduct("1", {"title": "TEST"})** fera en sorte de changer le titre du produit ayant l'id 1, en TEST.  
Vous pouvez aussi tout simplement envoyer un object ayant tous les fields, peu importe qu'ils soient differents de l'original ou non (c plus simple).  
<ins>PS:</ins> Retourne la reponse du serveur, meme utilisation que les autres.

- <ins>deleteProduct :</ins> Surement la fonction la plus simple. Elle demande 1 arguments **id**. Elle va supprimer le produit ayant cet id.   
Si l'id n'existe pas, une erreur se produira sur la console.  
<ins>PS:</ins> Retourne la reponse du serveur, meme utilisation que les autres.

### Comment utiliser ces fonctions ?
Rien de plus simple que de les apeller et de leur donner les arguments necessaire puis, vu que c'est des fonctions async, recuperer leur valeur de retour (**SI BESOIN**) et travailler dans:
- **then:** si vous voulez executer une fonction apres une operation reussie, et que vous avez besoin des données retournées.  
<ins>ex:</ins>  
.then((data) => {  
    console.log(data) //data c la valeur retournée par la fonction  
})  
- **catch:** si vous voulez executer une fonction apres qu'une erreur soit produite (par ex l'id n'existe pas)
- **finally:** si vous voulez executer une fonction apres le fetch, peu importe qu'il soit reussi ou qu'une erreur soit produite.

<ins>Ex:</ins>  
deleteProd('1')  
.**then**(( ) => { *//pas de data retournée par deleteProd, donc pas besoin d'un argument dans then*  
    console.log('Produit supprimé avec succes!')  
})  
.**catch**((error) => {  
    console.log('une error s'est produite', error)  
})  
.**finally**(( ) => {  
    navigate('/')  
})
  
Cela fera en sorte d'essayer de supprimer le produit ayant le id 1. Si c'est un succes, on l'affiche. S'il ya eu une erreur, on l'affiche aussi. Mais dans les 2 cas, apres cela, on retourne à la page des produits. Car 'finally' s'execute juste apres then/catch, peu importe laquelle des 2 a été executée.

## Détails sur HomePage et le dossier 'product/' (! IMPORTANT !) ET CE QUE VOUS DEVEZ FAIRE
- <ins>/index.html :</ins> L'HTML de la votre home page. Elle est quasi vide car tout se passe dans le fichier js.
- <ins>/home.js :</ins> C'est ici que se passe la logique de votre page ! Pour ceux qui ont assisté à la formation 2, ils se sentiront à l'aise en lisant ce fichier. Le seul changement c'est qu'au lieu que la **fonction fetch** (qui fetch tous les produits) soit dans ce fichier, on l'importe d'un autre ! Lisez tout de même les commentaires et comprenez bien/mieux ce qui se passe, car c'est ce dont vous vous baserez pour la suite (c'est facile vous en faites pas).

    - <ins>/product/index.html :</ins> Quasi vide, tout se passe sur JS.
    - <ins>/product/product.js :</ins> C'est enfin à vous de jouer !  
    1)- On a recuperer l'id de la page du produit actuelle depuis l'url pour vous ! Utilisez directement cette constante.  
    2)- Vous avez **un component** nommé Section. Vous devez le remplir avec les données du produit. Faites exactement comme home.js ! On vous a indiqué où mettre quoi avec \_\_FIELD_HERE\_\_  
    3)- On vous a préparez les fonctions qui vont donnent le Dom object des boutons edit et delete. Utilisez les pour ce qui suit.  
    4)- Les handle function ! Chacune doit s'executer apres avoir cliqué sur son bouton. L'edit handler a deja été fait pour vous, completez celle de delete !  
    5)- Enfin la fonction principale ! Vous devez tout simplement fetch les infos du produit avec l'id donné. Ensuite:  
    **Apres un fetch réussis**:
        - Creez la section avec l'object recu du fetch (utilisez console.log pour voir wsh fih)
        - Changez le titre de la page, avec le nom du produit (title)
        - Selectionnez chaque bouton separemment (fonction getXButton), et reliez leur ClickHandler respectif, à leur event click (check home.js pour revoir comment).
        - Selectionnez l'object html ayant l'id '#main', et ajoutez-y votre section ! (welo l'home.js pour voir comment, avec 'append')
        
        **Apres une erreur de fetch**:
        - Affichez l'erreur
        - Allez sur vos pages de produits (utilisez navigate)


## Que faire apres ? (supplementaire):
Si vous etes arrivé jusque là, c'est que vous avez deja appris:
- Fetch data from server (GET and DELETE)
- Error handling
- Dynamic HTML Component
- Route navigation

Honnetement, vous pouvez etre deja considéré comme **'diplomé'** de cette formation !  
Que faire apres ca ?  
Je vous ai laisser d'autres challenge !

### Add route
Vous y utiliserez la fonction createProduct ! Tres facile comme challenge, mais ca vous introduira à POST request.
### Edit route
Vous y utiliserez la fonction editProduct, mais pas que ! Ce challenge vous introduira aux PATCH requests, mais testera egalement vos skills en dynamic HTML rendering. Allez sur l'index.html de /product/edit. Vous trouverez que les valeurs sont statiques pour tous les produits.  
Or, on aimerait que les valeurs des champs soient ceux du produit qu'on veut modifier.  

**Tache:** Transformez cet html en component dans votre javascript vous meme ! Et modifiez les attribut 'value' des input du formulaire apres un fetch reussis, et ajoutez le au DOM. Completez le fichier js aussi pour que cette page soit fonctionnelle.

## Note de fin
GG si vous etes arrivés jusqu'ici.  
Vous etes officiellement un novice Frontend developpeur.  
Doka vous etes libres ! React pour avancer en frontend ? Ui/UX pour ameliorer vos rendus ? Backend pour mieux comprendre les serveurs ? FAITES COMME VOUS VOULEZ ! ET SURTOUT BRAVO !!!


##### made by:
*Manil Rabia, Responsable de la structure developemment du club ETIC.*  
Last PS: Good luck to my students, it was a **pleasure helping you** !
