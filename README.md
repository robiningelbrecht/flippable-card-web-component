# Flippable card web component

![Preview](https://github.com/robiningelbrecht/flippable-card-web-component/raw/main/assets/preview.gif "Preview")

Demo: [https://robiningelbrecht.github.io/projects/flippable-card-web-component/](https://robiningelbrecht.github.io/projects/flippable-card-web-component/)

## Usage

* Add following JS snippet to your HTML:

```javascript
<script type="module" src="js/flippable-card.js"></script>
```

* Start creating flippable cards:

```html
<flippable-card>
    <div slot="front"></div>
    <div slot="back"></div>
</flippable-card>
```

```html
<flippable-card flip-direction="vertical" flipped>
    <div slot="front"></div>
    <div slot="back"></div>
</flippable-card>
```