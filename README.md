# tailwindcss-shadcn-utilities

A plugin for Tailwind CSS v3.2+ that provides utility classes for combining background and foreground colors based on ShadCN themes. This allows you to apply consistent color combinations for elements like buttons, cards, popovers, and more with a single CSS class.

## Installation

Install the plugin from npm:

```sh
npm install tailwindcss-shadcn-utilities -D
```

```sh
pnpm add tailwindcss-shadcn-utilities -D
```

```sh
yarn add tailwindcss-shadcn-utilities --dev
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require("tailwindcss-shadcn-utilities"),
    // ...
  ],
};
```

## Usage

After adding the plugin, you can use the following utility classes to apply both background and foreground colors in one go:

| ~~Normal Use~~                               | with `tailwindcss-shadcn-utilities` |
| -------------------------------------------- | ----------------------------------- |
| `bg-card text-card-foreground`               | `card`                              |
| `bg-popover text-popover-foreground`         | `popover`                           |
| `bg-primary text-primary-foreground`         | `primary`                           |
| `bg-secondary text-secondary-foreground`     | `secondary`                         |
| `bg-muted text-muted-foreground`             | `muted`                             |
| `bg-accent text-accent-foreground`           | `accent`                            |
| `bg-destructive text-destructive-foreground` | `destructive`                       |

### Example

```html
<div class="card p-4 rounded-lg">
  <!-- ... -->
</div>

<button class="primary md:secondary">Button</button>

<button class="secondary hover:primary">Button</button>

<div class="popover p-4">
  <!-- ... -->
</div>
```

These utility classes will automatically apply both background and text colors based on the ShadCN UI theme.

## License

`tailwindcss-shadcn-utilities` is open-source and licensed under the [MIT License](./LICENSE).
