# react-usemediaquery

React hook and component for working with the https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList

## Installation

Via package manager:

```
npm i @milya505/react-usemediaquery
```

## Usage

---

#### 1. Example usage of the hook:

```jsx
import React from "react";
import { useMediaQuery } from "@my-npm-user/react-responsive";

const Example = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  return (
    <div>
      <h1>Device Test!</h1>
      {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
      {isBigScreen && <p>You have a huge screen</p>}
      {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
      <p>Your are in {isPortrait ? "portrait" : "landscape"} orientation</p>
      {isRetina && <p>You are retina</p>}
    </div>
  );
};
```

#### 2. Example usage of the component:

```jsx
import React from "react";
import MediaQuery from "@my-npm-user/react-responsive";

const Example = () => (
  <div>
    <h1>Device Test!</h1>
    <MediaQuery minWidth={1224}>
      <p>You are a desktop or laptop</p>
      <MediaQuery minWidth={1824}>
        <p>You also have a huge screen</p>
      </MediaQuery>
    </MediaQuery>
    <MediaQuery minResolution="2dppx">
      {" "}
      {/* @media (-webkit-min-device-pixel-ratio: 2) */}
      {/* You can also use a function (render prop) as a child */}
      {(matches) =>
        matches ? <p>You are retina</p> : <p>You are not retina</p>
      }
    </MediaQuery>
  </div>
);
```

##### Note:

Expected props of this component:

```
orientation
minResolution
maxResolution
minWidth
maxWidth
minHeight
maxHeight
```

Props `minResolution` and `maxResolution` can be assigned a value in the format of `{number}dppx` or a simple `number`

####Keywords

---

<style>
	.links {
		display: flex;
		gap: 20px;
		flex-wrap: wrap;
	}
  	.link{
    	color: #cb3837;
        font-size: 1.25rem;
		
  	}
	.link:hover {
		color: rgba(0,0,0,.7);
	}
</style>
<div class='links'>
	<a href="https://www.npmjs.com/search?q=keywords:react" class='link'><b>react</b></a>
	<a href="https://www.npmjs.com/search?q=keywords:hook" class='link'><b>hook</b></a>
	<a href="https://www.npmjs.com/search?q=keywords:media" class='link'><b>media</b></a>
</div>
