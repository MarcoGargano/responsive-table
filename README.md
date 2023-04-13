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

# 🛠️ How to

## 1. Installation

**[Download the package](https://marcogargano.github.io/responsive-table/download/table-mobile.zip)**

What inside the zip file:

```html
css/table-mobile.css
js/table-mobile.js
```

## 2. Usage

### Add style and javascript

Add the link below in your file, inside of head: 

```html
<link rel="stylesheet" href="css/table-mobile.css">
<script src="js/table-mobile.js"></script>
```

### Init script

Add the code below in your file, inside of head or footer: 

```html
<script>
  window.onload = () => {
    const selector = "table.table-mobile";
    window.TableMobile.doTable(selector);
  };
</script>
```

### Add the `table-mobile` class to your table

For example if you are using Bootstrap: 

```html
<table class="table table-striped table-mobile">
  <thead>
    ...
  </thead>
  <tbody>
    ...
  </tbody>
</table>
```

---

# 🕹️ Demo

### Prototype on [**CodePen**](https://codepen.io/marcogargano/full/JjamvKP)

<img src="https://iili.io/Hv2X3S1.gif" style="max-width: 100%;">

---

# 👾 Links

### React version

- 👉 [**NPM Package**](https://www.npmjs.com/package/responsive-table-react)
- 👉 [**GitHub Repository**](https://github.com/MarcoGargano/responsive-table-react)
- 👉 [**GitHub Page**](https://marcogargano.github.io/responsive-table-react/)

---

# 🍕 Pizza time

If you like this project and you want to support it... [**PIZZAAA😋😋😋**](https://www.paypal.com/paypalme/MarcoGargano/10)
