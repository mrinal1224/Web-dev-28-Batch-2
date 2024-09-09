# Class Notes - Introduction to CSS

# Agenda:
- What is CSS
- Need for CSS
- CSS Selectors
- Properties of CSS (color, background, fonts, and texts)

So, lets start!


>Various ways of using CSS
They are: 
1. Inline
2. Internal
3. External


These are the things that we will discuss. Now, let us see them one by one.


- Create a basic HTML file and add a heading **h1** inside the body tag entitled: "Heading 1" and open it in a browser to show how it looks.
- Now, let us see how to add CSS to this element.


# Steps to add style tag:
- Add `<style>` and `</style>` tag inside the head tag of your HTML file. Inside this **style** tag, you can use all the CSS stylings.
- Select the element that you need to add CSS.
- For example, h1 and add curly braces to it. Inside this, you can define the CSS properties as shown below:

```HTML=
h1{
    color : brown;
}



# Using CSS in three different ways:

## 1. Internal CSS 
- When you write CSS in the same HTML file. (using the style tag)


## 2. Inline CSS
- It is writing CSS for a particular element. (using style attribute.) 

### Example
```
<h2 style = "color: red;"> I am heading 2 </h2>
```
- Here we are providing the CSS to that specific element "h2" only, known as Inline CSS. Always try to add a style tag inside the **head tag**.
- Inline CSS has more priority than Internal CSS.


## 3. External CSS
- You can create a separate file for CSS having the extension "**.css**".
- Here you do not need to use any HTML tag. You can directly write your CSS and properties.

### Example

```HTML=
H3{
    color: green;
}
```
To reflect these CSS into your HTML file, you need to link that CSS file to the HTML file.
- Use the "link" tag to do this as shown below.

```
<link rel="CSS_file_name" href="./CSS_file_name.css">
```
- You can add the file location in the **href** to add the CSS file if it is at some other location in your system.

> These are the three ways that can be used to apply CSS to your HTML file. Now we will discuss the ways of selecting a particular element.


- As we have seen in the previous example, **h1{}** was the selector. But there are more ways of selecting elements.
- Have a brief discussion about how the students can select an element as the previous method that we learned till now.

## Descendent selectors
- Anything down the order can be termed as a descendent. For example, a child is the descendent of their father and Grand Father as well.
- Now, you need to select the obvious list as shown in the image and make it blue color.


![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/035/original/upload_741aa927d48eecd0dcd6ec59f15eba43.png?1695311213)


- For that first discuss the "**descent selector**". 
- When you select **ol li{}** as the selector then all the elements will get blue. So you need to select the specific parents that are "div" as shown in the example.

- We will write the selector as:
```HTML=
div li{
    color: blue;
}
```
Now moving to Children Selectors.

## Children selectors
Let us take an example as shown below.


![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/036/original/upload_6e331819a556124295cda866b1ad80df.png?1695311277)


There are two span tags. Here we need to make the text "I am the direct son" blue using CSS.

- Use the greater than **">"** symbol to use direct children.

```html=
div > h1 > span{
    color: blue;

}
```
- It means that you are directing to apply CSS to the span element that is directly children to the **h1**.

Let's see another type of selector which is the Classes

## Classes

- It is a very important part when you are learning CSS.
- Classes are defined as separate entities of similar elements.
- For real real-life example, if you are in class 10, then all the students there should be in class 10 only.
- Similarly, in CSS, similar elements having the same behavior are separated in a specific class as shown below code:


![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/037/original/upload_130e57374ed680b30734deba9ee0b2c7.png?1695311313)


- We use dot (.) to select a class and apply CSS to them. Here the name of the class is test so we will apply CSS to this class as below:

```HTML=
.test{
    color: blue;
}
```
This will be applied to both the elements of the class namely the **test**.

> Discuss a question having two different classes namely **class1** and **class2** and apply CSS on them to make one class **blue** and one class **red**.
- Solution:
```HTML=
.class1{
    color: blue;
}:

.class2{
    color: red;
}
```
### Question on multiple classes

Suppose a situation when there are two or more than two classes for a single element as shown below and you have to make some specific elements blue.


![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/038/original/upload_1a43d7aa8cd4e546b6264e88799e956b.png?1695311389)


- Here we need to select multiple classes **m1** and **m2** and make them blue.
- Solution:
```HTML=
.m1.m2{    <!-- it is multiple selector -->
    color : blue;
}
```
Here you will use multiple classes as shown in the example to apply the CSS to some specific elements in such cases.

### Question on a combination of all the previously discussed selectors.

You have to make the text "**I'm here, find me**" blue as shown in the question image below. Feel free to use any selector or combination of selectors you want.


![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/039/original/upload_e17f8e227f4328a482d1cc22803e0dc5.png?1695311505)



- **Solution**:

```HTML=
.c1 .c2{
    color: blue;
}
```

### Question on Class with Children Combinator

In this question you need to make the select and make the text "**I'm a direct son**" blue.


![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/041/original/upload_6e8bceeaca78cf983eb897650d522316.png?1695311598)


- **Solution**:
```HTML=
.c1>p{
    color: blue;
}
```

### Question on id selector
- The id selector uses the id attribute of an HTML element to select a specific element.

- The id of an element is unique within a page, so the id selector is used to select one unique element.
- We use "#" to address the id.


### Example

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/042/original/upload_0a85830042d3f0d832f66b0c11e9ab40.png?1695311661)

- You need to select **s2** with the "id=the-one" and make blue

- Solution:
```HTML=
#the-one{
    color: blue;
}
```

### Question on attribute selector

- CSS attribute selectors are used to select and style HTML elements with the specified attributes and values.
- Let us take an example as shown below. Here we need to select the button element and make the color blue.


![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/044/original/upload_106e606616e173b79a0a71bd501d9812.png?1695311699)


- **Solution**:
```HTML=
input[value="Select me"]{
    color: blue;
}
```
Here you can write the element like "input" and start the bracket "[]". Inside the bracket, you can write the attribute that you are selecting to apply CSS.

- That's how the attribute selector works.

# 1. Normal Color 
- The very basic way of using colors is as follows as we have discussed earlier that is `h1{color: color_name;}`
- Using this method you can use the 140 colors of CSS. But what do you need to use a color apart from these 140 colors?

# 2. RGB
- Then we use the **RGB value** to change the element colors. 
- RGB is the color concept that shows how you can create any color using a definite proportion of these three colors that are **Red**, **Green**, and **Blue**.
The range of RGB values is from **(000 to 255)**.

Let us take an example how to use RGB values for CSS.


![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/045/original/upload_001bf16ebd83d5ea0df12fc19d263397.png?1695311917)
[

- You can also add **opacity** property where you pass the RGB values. 
- Range of opacity is from (0.00 to 1.00)
- For example-

```HTML=
color : rgba(255, 165, 100, 0.50);
```



# 3. Color code (Hexadecimal code)
- Color codes are three-byte hexadecimal numbers (meaning they consist of **six digits**), with each byte, or pair of characters in the Hex code, representing the intensity of **red**, **green**, and **blue** in the color respectively.
- We have hex code for every color in CSS.
- You can find these codes on Google search also.


- You can use these hex codes to paste into your CSS thing.
- Remember to apply hashtag **"#"** before the codes. For example- **#DC143C** 

Now, let us see the 4th method of CSS Colors.

# 4. HSC 
- It stands for **Hue**, **Saturation**, and **Lightness**.

## Example
```HTML=
h2{
    color : hsl(100%, 15%, 25%)
}
```
- In this, we define these three properties in percentage.



# Final Question of the session

Now, let us summarize the session and use all the previous selectors and color properties to solve this problem shown below:


![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/046/original/upload_cf0319b7c90943234aa84a26a0e8ff6f.png?1695312027)


- **Solution**:
First, we will add a style tag and then write all the CSS provided in the question like this:


![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/047/original/upload_2ea1f412f739128739787f0498ccba03.png?1695312161)


Coming to the point 6 of the question. Let us first see what is pseudo selector.

## Pseudo selector
- When you hover over any element and it changes its behavior, it is known as a Pseudo selector.
- For example, if you go on a sign-in button it becomes popped up.

```HTML=
a.hover{
    color : hsla(100%, 15%, 25%, 0.6)
}
```

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/048/original/upload_14bb1001ae9af53dda59aa7200cd2c8f.png?1695312197)









# Further Reading - Comprehensive Guide to CSS Selectors

## Introduction

CSS (Cascading Style Sheets) selectors play a crucial role in styling web documents. They enable developers to target specific HTML elements and apply styles to them. In this guide, we'll explore various CSS selectors, accompanied by practical examples.

### 1. Universal Selector

The universal selector `*` selects all elements on a webpage. It can be used to apply a style globally.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * {
      margin: 0;
      padding: 0;
    }
  </style>
  <title>Universal Selector Example</title>
</head>
<body>
  <!-- All elements will have no margin or padding -->
  <div>Hello, World!</div>
</body>
</html>
```

### 2. Type Selector

The type selector selects elements based on their tag names. For example, `p` targets all `<p>` elements.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    p {
      color: blue;
    }
  </style>
  <title>Type Selector Example</title>
</head>
<body>
  <p>This is a paragraph with blue text.</p>
  <div>This won't be affected.</div>
</body>
</html>
```

### 3. Class Selector

The class selector targets elements with a specific class attribute.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .highlight {
      background-color: yellow;
    }
  </style>
  <title>Class Selector Example</title>
</head>
<body>
  <p class="highlight">This paragraph has a yellow background.</p>
  <p>This paragraph won't be highlighted.</p>
</body>
</html>
```

### 4. ID Selector

The ID selector targets a specific element with a unique ID attribute.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    #main-heading {
      font-size: 24px;
    }
  </style>
  <title>ID Selector Example</title>
</head>
<body>
  <h1 id="main-heading">This heading has a larger font size.</h1>
  <p>This won't be affected.</p>
</body>
</html>
```

### 5. Attribute Selector

The attribute selector targets elements based on their attributes.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    input[type="text"] {
      border: 1px solid #ccc;
    }
  </style>
  <title>Attribute Selector Example</title>
</head>
<body>
  <input type="text" placeholder="Type something here">
  <input type="password" placeholder="Password">
</body>
</html>
```

### 6. Child Selector

The child selector (`>`) selects direct children of a specified element.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    ul > li {
      list-style-type: square;
    }
  </style>
  <title>Child Selector Example</title>
</head>
<body>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <ul>
      <li>Sub-item 1</li> <!-- This won't have square bullets -->
      <li>Sub-item 2</li> <!-- This won't have square bullets -->
    </ul>
  </ul>
</body>
</html>
```

### 7. Descendant Selector

The descendant selector (whitespace) selects all descendants of a specified element, regardless of their depth.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    article p {
      font-style: italic;
    }
  </style>
  <title>Descendant Selector Example</title>
</head>
<body>
  <article>
    <p>This paragraph is italicized.</p>
    <div>
      <p>This paragraph is also italicized.</p>
    </div>
  </article>
</body>
</html>
```

### 8. Adjacent Sibling Selector

The adjacent sibling selector (`+`) selects an element that is immediately preceded by a specified element.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    h2 + p {
      font-weight: bold;
    }
  </style>
  <title>Adjacent Sibling Selector Example</title>
</head>
<body>
  <h2>Heading 2</h2>
  <p>This paragraph has bold text.</p>
  <p>This paragraph won't be affected.</p>
</body>
</html>
```

### 9. General Sibling Selector

The general sibling selector (`~`) selects all elements that are siblings of a specified element.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    h2 ~ p {
      color: green;
    }
  </style>
  <title>General Sibling Selector Example</title>
</head>
<body>
  <h2>Heading 2</h2>
  <p>This paragraph has green text.</p>
  <p>This paragraph also has green text.</p>
</body>
</html>
```

## Advanced CSS Selectors


### 1. `:hover`, `:active`, `:focus` Pseudo-classes

#### Explanation:
- `:hover`: Styles a button when the mouse cursor is over it.
- `:active`: Applies styles to the button when it is being clicked.
- `:focus`: Adds a green border to an input element when it has keyboard focus.

#### HTML and CSS:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    button:hover {
      background-color: lightblue;
    }

    button:active {
      transform: scale(0.9);
    }

    input:focus {
      border: 2px solid green;
    }
  </style>
</head>
<body>
  <button>Hover me</button>
  <input type="text" placeholder="Focus me">
</body>
</html>
```

### 2. `:nth-child()` Pseudo-class

#### Explanation:
- `:nth-child(odd)`: Styles odd list items with a light gray background.
- `:nth-child(even)`: Styles even list items with a light blue background.

#### HTML and CSS:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    li:nth-child(odd) {
      background-color: lightgray;
    }

    li:nth-child(even) {
      background-color: lightblue;
    }
  </style>
</head>
<body>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
  </ul>
</body>
</html>
```

### 3. `:not()` Pseudo-class

#### Explanation:
- `:not(.special)`: Styles paragraphs that do not have the class "special" with a dark gray color.

#### HTML and CSS:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    p:not(.special) {
      color: darkgray;
    }
  </style>
</head>
<body>
  <p>This is a regular paragraph.</p>
  <p class="special">This is a special paragraph.</p>
</body>
</html>
```

### 4. `:first-child`, `:last-child`, `:only-child` Pseudo-classes

#### Explanation:
- `:first-child`: Makes the first list item bold.
- `:last-child`: Changes the color of the last list item to red.
- `:only-child`: Makes the only paragraph inside its container italic.

#### HTML and CSS:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    li:first-child {
      font-weight: bold;
    }

    li:last-child {
      color: red;
    }

    p:only-child {
      font-style: italic;
    }
  </style>
</head>
<body>
  <ul>
    <li>First</li>
    <li>Second</li>
    <li>Last</li>
  </ul>

  <p>First paragraph</p>
  <p>Second paragraph</p>
  <p>Last paragraph</p>
</body>
</html>
```

### 5. `:nth-of-type()` Pseudo-class

#### Explanation:
- `:nth-of-type(2n)`: Styles every second paragraph with a light gray background.

#### HTML and CSS:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    p:nth-of-type(2n) {
      background-color: lightgray;
    }
  </style>
</head>
<body>
  <p>First paragraph</p>
  <p>Second paragraph</p>
  <p>Third paragraph</p>
</body>
</html>
```

### 6. `:first-of-type`, `:last-of-type`, `:only-of-type` Pseudo-classes

#### Explanation:
- `:first-of-type`: Styles the first heading with a green color.
- `:last-of-type`: Increases the font size of the last paragraph.
- `:only-of-type`: Adds a blue border to the only div containing a paragraph.

#### HTML and CSS:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    h2:first-of-type {
      color: green;
    }

    p:last-of-type {
      font-size: 18px;
    }

    div:only-of-type {
      border: 1px solid blue;
    }
  </style>
</head>
<body>
  <h2>First Heading</h2>
  <h2>Second Heading</h2>

  <p>This is a paragraph in a div.</p>
  <div>
    <p>Another paragraph</p>
  </div>
</body>
</html>
```

### 7. `:checked`, `:disabled` Pseudo-classes

#### Explanation:
- `:checked`: Styles a checked checkbox with a yellow background.
- `:disabled`: Reduces the opacity of a disabled checkbox.

#### HTML and CSS:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    input:checked {
      background-color: yellow;
    }

    input:disabled {
      opacity: 0.5;
    }
  </style>
</head>
<body>
  <input type="checkbox" checked> Checked
  <input type="checkbox" disabled> Disabled
</body>
</html>
```

### 8. `:before`, `:after` Pseudo-elements

#### Explanation:
- `:before`: Inserts ">> " before the content of each paragraph with a blue color.
- `:after`: Inserts " <<" after the content of each paragraph with a red color.

#### HTML and CSS:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    p:before {
      content: '>> ';
      color: blue;
    }

    p:after {
      content: ' <<';
      color: red;
   

 }
  </style>
</head>
<body>
  <p>This is a paragraph.</p>
</body>
</html>
```

Feel free to use these examples as standalone HTML files to understand and experiment with each advanced CSS selector.


## Background , Fonts and Texts


**Background Color**
- It works the same as the color.
- You can add CSS code for background color as :
```HTML=
h1{
    background-color : blue;
}
```

## **Example**:


Here you will select the class namely "background" and apply CSS to them. It will be reflected to all the **h1s** inside that div tag.

> `color` is used to change the text color but `background-color` is used to change the color area behind that text.

- You can also use an image as the text background. To do this, you need to provide the image URL in the CSS as shown below:
```HTML=
h1{
    background-image : url(" url_of_that_specific_image.jpg ");
}
```

You can set the background size as:
```HTML=
h1{
    background-image : url(" url_of_that_specific_image.jpg ");
    background-size : 400px;
}
```
- In the CSS background property, when it finds any empty space, it starts to repeat its element. You can use the property `background : no-repeat;` to avoid it. 
- -You can customize the repetition of the BG image using the X and Y axis. 

- You can customize various aspects of the font such as size, look, and many dynamics of it. Let us see them one by one.

Then we will apply CSS to the fonts. First, let us see font family.

## Font family
- The different types of font available in the CSS are termed as font family.
- The font-family property can hold several font names as a "**fallback**" system. If the browser does not support the first font, it tries the next font.
- Font family are like "times", "courier", "arial". If you want to use a single font from this, you can just remove the other font styles from the font family.
- Syntax:
```HTML=
.heading_1{
    font-family: your_desired_font
}
```

## Font weight
- This font property is used to decide the intensity of the font.
- It's value ranges from lightest **100px** to boldest **800px**.
- Syntax:

```HTML=
font-weight: 800px;
```

## Font size
- It refers to the size of the text.
- Syntax:
```HTML=
font-size: xx-larger;
```
```HTML=
font-size: 50%;
```

- There is also a font-style that you can choose to customize your font like bold, italic, etc.

## Google font
- If you are not unable to get the font requirement from the above font properties, then you can use the Google font option.
- You just need to go to the Google search and search "**google font**". Refer website: `https://fonts.google.com/`.
- Here you can find and choose the font. Click over the font and you will get a lot of options to customize that font.
- Click on "**select font_style**" and select the link there.

- Now copy the font family from the Google font website and you can use it in the CSS.
- Since you have imported the Google fonts using API till now. Now you can just copy the font family from Google font and paste it at the font family section in the link of the head tag.

- Font and text can be seen as similar but they are not.
- Font focus on the look and styling but Text is the internal working of your text such as spacing, line width, etc.


First, let us see the text alignment property

## Text Alignment
- It is used to make the alignment of your text like from the left, from the right, or in the center.
- Syntax:

```HTML=
.heading_1{
    text-align : left;
}

```

## Text Decoration
- It is used to make your text attractive using some properties.
- These are oval-line, line-through, underline, etc.
- Syntax:

```HTML=
.heading_1{
    text-decoration : oval-line;
}
```

## Word Spacing
- It defines how many spaces are there between any two consecutive words.
- It is defined using the pixel values.
- Syntax:

```HTML=
.heading_1{
    text-decoration : oval-line;
    word-spacing : 100px;
}
```
## Line Height
- It defines the height between two consecutive lines.
- Syntax:

```HTML=
.heading_1{
    text-decoration : oval-line;
    word-spacing : 100px;
    line-height : 100px;
}
```
These are all text and font properties.


## Further Resources



### **4. Resources for Further Learning:**

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS): A comprehensive CSS resource.

- [CSS Tricks](https://css-tricks.com/): Articles, tips, and tricks for CSS.

### **5. Practice Resources:**

- [CSS Diner](https://flukeout.github.io/): A game for learning CSS selectors interactively.






