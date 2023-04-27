# Responsive table
#### CSS3 & Vanilla JS
### Super flexible & responsive table
- 🖥️ On desktop as a classic table 
- 📱 On mobile as collapsable rows

**A super user-friendly experience, start to use your table also on mobile!**

![lan](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![lan](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![lan](https://img.shields.io/badge/JS-F7DF1E?style=for-the-badge&logo=jss&logoColor=black)

---

## 🕹️ Demo

Check the demos to view the effect:

- [with Bootstrap](https://marcogargano.github.io/responsive-table/package/demo-bootstrap.html)
- [our style](https://marcogargano.github.io/responsive-table/package/demo.html)
- [our dark mode style](https://marcogargano.github.io/responsive-table/package/demo-dark.html)

---

## 📦 Package

You can download our working demos to use how you prefere: 

- **[DOWNLOAD HERE](https://marcogargano.github.io/responsive-table/download/table-mobile.zip)**

What inside the zip file:

```html
css/table-mobile.css
css/table-mobile-theme.css
js/table-mobile.js
demo-bootstrap.html
demo-dark.html
demo.html
```

How to use those files:
- **table-mobile.css** and **table-mobile.js** are required to work 
- **table-mobile-theme.css** is optional, just to apply a great style 
- the html files are some demos you can use 

---

## 🛠️ Usage

Add style and javascript link below in your file, inside of head: 

```html
<link rel="stylesheet" href="css/table-mobile.css">
 <!-- Optional -->
<link rel="stylesheet" href="css/table-mobile-theme.css">
<script src="js/table-mobile.js"></script>
```

Add the code below in your file to init script, inside of head or footer: 

```html
<script>
  window.onload = () => {
    const selector = "table.table-mobile";
    window.TableMobile.doTable(selector);
  };
</script>
```

### Add classes to your table:
- **`table-mobile`** for the plain integration, you can use it together with a framework (for example Bootstrap) 
- **`table-mobile-theme`** to apply our beautifull style 
- **`table-mobile-dark`** to apply our style in a dark mode 

```html
<table class="table-mobile table-mobile-theme table-mobile-dark">
 <thead>
  <tr>
   <th>...</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>...</td>
  </tr>
 </tbody>
</table>
```

---

<center>
<img src="https://iili.io/Hv2X3S1.gif" style="max-width: 100%;">
</center>

---

## 👾 Connected project

React version: 
- [**NPM Package**](https://www.npmjs.com/package/responsive-table-react)
- [**GitHub Repository**](https://github.com/MarcoGargano/responsive-table-react)
- [**GitHub Page**](https://marcogargano.github.io/responsive-table-react/)

---

## 🍕 Pizza time

If you like this project and you want to support it... [**PIZZAAHA!**](https://www.paypal.com/paypalme/MarcoGargano/10)
