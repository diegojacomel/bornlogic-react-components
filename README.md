## bornlogic-react-components

Bornlogic react components library.

## How can I install the library?

#### Using npm
```
npm install bornlogic-react-components
```

#### Using yarn
```
yarn add bornlogic-react-components
```

## How can I import the components?

```
import { Button } from 'bornlogic-react-components';
```


## Components

# Container

### Basic usage

```js
<Container
    maxWidth="90%"
    // noLeft
>
    Container
</Container>
```

### Props

#### **maxWidth**

The "maxWidth" define the maximum width.

type: string

#### **noLeft**

The "noLeft" remove left padding.

type: boolean

---


# Button

### Basic usage

```js
<Button>Click here</Button>
```

### Props

#### **type**

The type attribute specifies the type of button.

type: string

#### **color**

It define the button color.

type: string

- primary
- danger
- success
- default

```js
<div>
    <Button color="primary">primary</Button>
    <Button color="danger">danger</Button>
    <Button color="success">success</Button>
    <Button color="default">default</Button>
</div>
```

#### **outline**

It define if the button is outline or filled.

type: bool

```js
<div>
    <Button color="primary" outline>primary</Button>
    <Button color="danger" outline>danger</Button>
    <Button color="success" outline>success</Button>
    <Button color="default" outline>default</Button>
</div>
```

#### **size**

It define the button size.

type: string

- xg
- lg
- md
- sm
- xs

```js
<div>
    <Button color="primary" size="xg">Button XG</Button>
    <Button color="primary" size="lg">Button LG</Button>
    <Button color="primary" size="md">Button MD</Button>
    <Button color="primary" size="sm">Button SM</Button>
    <Button color="primary" size="xs">Button XS</Button>
</div>
```

#### **rounded**

It define the button rounded size.

type: string

- none
- sm
- md
- lg
- full

```js
<Button color="primary" rounded="lg">Button Rounded</Button>
```

#### **block**

Let the button with full width display.

type: bool

```js
<Button color="primary" block>Button Block</Button>
```

#### **icon**

If you to wish putting a icon on button.

type: string

P.S.: To more information, you should find the Icon component on styleguide sidebar.

```js
<Button color="primary" icon="arrow-right2" iconSize="md" iconColor="white">
    Button Icon
</Button>
```

#### **iconSize**

It define the icon size.

type: string

- xxs
- xs
- xsm
- sm
- md
- lg
- xlg
- xg
- xxg

#### **iconColor**

It define the button color.

type: string

- primary
- danger
- success
- default

#### **iconLeft**

It should be used when you want reverse the icon side.

type: bool

#### **onClick**

It should be used to fire any method that you want.

type: function


---


# Title

### Basic usage

```js
<Title tag='h2' color='primary' fontWeight='bold' marginBottom='md' separator>Title</Title>
```

### Props

#### **tag**

Tag indicate which Heading Tags must be used.

type: string

- h1
- h2
- h3
- h4
- h5
- h6

```js
<div>
    <Title tag='h1'>H1</Title>
    <Title tag='h2'>H2</Title>
    <Title tag='h3'>H3</Title>
    <Title tag='h4'>H4</Title>
    <Title tag='h5'>H5</Title>
    <Title tag='h6'>H6</Title>
</div>
```

### **color**

Color refers to the colors specified in Themes.js file

type: string

- primary
- blueLight
- blueDark
- ...


```js
<div>
    <Title color='primary'>Primary</Title>
    <Title color='blueLight'>BlueLight</Title>
    <Title color='blueDark'>BlueDark</Title>
</div>
```

### **fontWeight**

fontWeight refers to the fontWeight specified in Themes.js file

type: string

- ultraLight
- light
- normal
- bold

```js
<div>
    <Title fontWeight='ultraLight'>UltraLight</Title>
    <Title fontWeight='light'>Light</Title>
    <Title fontWeight='normal'>Normal</Title>
    <Title fontWeight='bold'>Bold</Title>
</div>
```


### **marginBottom**

marginBottom refers to the Spacing specified in Themes.js file

type: string

- xxs
- md
- xg

```js
<div>
    <Title marginBottom='xxs'>Text 1</Title>
    <Title marginBottom='md'>Text 2</Title>
    <Title marginBottom='xg'>Text 3</Title>
</div>
```

### **separator**

separator adds a line on the right side of the title until the end of the div

type: bool

```js
<div>
    <Title separator>Text With Separator</Title>
</div>
```


---


# Checkbox

### Basic usage

```js
<Checkbox
    name="name"
    id={1}
    onClick={() => {}}
/>
```

### Props

#### **name**

The "name" define the field name.

type: string

#### **id**

The "id" define the field id.

type: any

#### **onClick**

The "onClick" attribute call a method to do something.

type: function