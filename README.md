# Flippable card web component

![Preview](https://github.com/robiningelbrecht/flippable-card-web-component/raw/main/assets/preview.gif "Preview")

Demo: [http://flippable-card-web-component.robiningelbrecht.be/](http://flippable-card-web-component.robiningelbrecht.be/)

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

```html
<flippable-card disabled>
    <div slot="front"></div>
    <div slot="back"></div>
</flippable-card>
```
