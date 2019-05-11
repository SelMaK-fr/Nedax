<p align="center">
<img src="https://www.yann-cario.fr/public/assets/pictures/Dashboard_beta.jpg">
</p>

<p align="center">
<img src="https://img.shields.io/badge/KNACSS-framework-green.svg">
</p>


# In development
Nedax is currently under development, the deposit is available but note that the project is not completed.

# Nedax Dashboard Template

[ENGLISH]
Nedax is an admin theme developed in HTML5 and CSS3. It also uses the CSS Knacss framework.
It was designed to administer small websites.

[FRENCH]
Nedax est un thème admin pour site internet développé en HTML5 et CSS3. Il utilise le framework CSS Knacss.
Il a été pensé pour administré des petits projets.

[Demonstation](https://labs.synexo.fr/nedax/) - [French Support](https://support.synexo.fr/)

## Getting Started

Nedax and SASS / SCSS
Please configure your IDE to take full advantage of the SASS preprocessor

# Use plugins

#### Ribbon

The class `ribbon` is by default in `position: absolute`. 

```html
<div class="ribbon"><span>My ribbon</span></div>
```
#### Markdown Editor

The editor is imported by default  

Initialize the editor  

```javascript
var md = new MdEditor('#mdeditor', {
    preview: false
});
```

Add ID `mdeditor` to the textarea    

```html
<textarea id="mdeditor" name="name"></textarea>
```

#### JS Color

Add class `jscolor` to the input  

```html
<input class="jscolor" type="text" name="name">
```

#### Modal

Html button   

```html
<button data-modal-trigger="mymodal" class="btn btn-primary">Open</button>
```

Html Modal   

```html
<div data-modal="mymodal" class="modal">
<div class="content-wrapper">
<button type="button" class="close"></button>
<div class="modal-header">
<h2>Title Modal</h2>
</div>
<div class="content">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente quasi ea quo dolor commodi facere optio maxime quae velit earum natus ut, mollitia porro rerum. Culpa quo vero tempora eum!
</div>
<div class="modal-footer">
<button type="submit" class="btn btn-primary">I Agree</button>
</div>
</div>
</div>
```

### Versions

Nedax is currently in beta phase

```
b.1802.19
```

- Add forms  
- Change logo  
- Add Tabs  
- Add UI Elements 

```
b.2203.19
```

- Correction HTML code (deleting the section tag)

```
b.1105.19
```

- Add Modal
- Add Error page
- Add Blank page
- Add active class in navadmin menu
- Correction li for breadcrumb navigation
- Correction padding-bottom for app-content class
- Update Font Awesome (5.8.2)


## Built With

* [Knacss](https://github.com/alsacreations/KNACSS)
* [JS-Markdown-Editor](https://github.com/Grafikart/JS-Markdown-Editor)
* [JS Color](http://jscolor.com)
* [Tabs Pepin](https://github.com/alsacreations/pepin/tree/master/tabs)

## Authors

* **SelMaK** - *Initial work* - [SelMaK-fr](https://github.com/SelMaK-fr/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
