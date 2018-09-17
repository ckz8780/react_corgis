# React Corgis!

## A responsive, fluid photogrid using Flexbox, ReactJS and Bulma.

### Live Site: https://ckz8780.github.io/react_corgis/

### Methodology:

The `Gallery` component is the parent. In its render function it calls the `generatePhotos` function which returns an array of randomly sized photo objects, grouped by height. It then renders a small form and maps each height group into a `PhotoContainer` component. The `PhotoContainer` maps each photo object in the input array into a `Photo` component. The `Photo` component renders a div w/ flexbox styles to maintain the aspect ratio and places the photo in it using the photo object properties (src, alt, etc). All `PhotoContainer`s are `display: flex; flex-direction: row; flex-wrap: wrap;` so they will wrap cleanly. All `Photo`s use a combination of flex-grow, flex-shrink and flex-basis to maintain their aspect ratio a la `flex: [aspectRatio] 1 auto;`. The aspect ratios are calculated in the `generatePhotos` function and passed into the component via the `photoObj` prop.

The form at the top of the page allows you to change the number of photos, min/max width and min/max heights of the images (x100). If you want to see how the flex stuff work, set them all to 1 and resize your browser with 15-20 photos.

**IMPORTANT NOTE:** *The source website doesn't have an infinite number of photos! It crops them to deliver the sizes you request, so it may appear that some photos are cropped if you request a very small or a very large aspect ratio (see http://placecorgi.com/1000/100 for example). **These images are NOT cropped by this code** and in order to maintain the 100% width/heigght of their parent containers they may become very large/pixelated. For this reason the max height and width are limited to 10 (1000px).*

### Components:

- `Gallery`: The parent gallery component
  - Props: None
  - Initial State: 
    - photoCount: Number of photos to render => 10
    - domainStub: The stub for the domain that generates random images => "http://www.placecorgi.com"
    - minWidth: Minimum width for the generated photos (x 100) => 2
    - maxWidth: Maximum width for the generated photos (x 100) => 4
    - minHeight: Minimum height for the generated photos (x 100) => 1
    - maxHeight: Maximum height for the generated photos (x 100) => 4

- `PhotoContainer`: A flex photo container for grouping images of similar heights
  - Props: 
    - An array of photos of similar heights

- `Photo`: A photo component to fill up a `PhotoContainer`
  - Props: a photo object containing the image's:
    - width: Width
    - height: Height
    - aspectRatio: Aspect Ratio
    - src: Data Source
    - styles: Styles (applied to the photo's parent div to maintain aspect ratio)
    - alt: Alt Text

### Potential Improvements:

- Loading indicators/conditional render logic
- Adjustment of aspect ratios so images don't need to be grouped by height
- Flexible row height w/ a size observer (see something like [react-photo-gallery](https://github.com/neptunian/react-photo-gallery/) for example)
- Masonry/CSS grid dense/Bulma tile type layouts
- Move photolist into `Gallery` state and use `componentDidMount()` and `shouldComponentUpdate()` for management
- Dynamic domain stub (kittens, corgis, Bill Murrays, why not?)