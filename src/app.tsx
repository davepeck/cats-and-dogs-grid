import { useState } from "react";

/** React component called `CatGrid` that draws a `width` * `height` grid of img/cat.png */
export const CatGrid = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
  return (
    <div className="grid">
      {Array.from({ length: height }, (_, y) => (
        <div key={y}>
          {Array.from({ length: width }, (_, x) => (
            <span key={x} className="cat">
              &nbsp;
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

/**
 * Compute the ideal width and height of a grid with `count` cats.
 *
 * Do this by finding the `width` and `height` that are closest to a square.
 */
const computeGridSize = (count: number) => {
  const sqrt = Math.sqrt(count);
  for (let height = Math.floor(sqrt); height >= 1; height--) {
    const width = Math.ceil(count / height);
    if (height * width == count) {
      return { width, height };
    }
  }
  throw new Error("unreachable");
};

/** Don't count less than 1. */
const MIN_COUNT = 1;

/** Don't count more than 25. */
const MAX_COUNT = 25;

/** Our main react component. Included by index.html. Start by writing your code here. */
export const App: React.FC = () => {
  const [count, setCount] = useState(1);

  // Show increment and decrement buttons, the current count, and a grid of cats
  // matching the current count.
  const { width, height } = computeGridSize(count);
  return (
    <div>
      <div className="buttons">
        <button onClick={() => setCount(Math.max(MIN_COUNT, count - 1))}>
          -
        </button>
        <span>{count}</span>
        <button onClick={() => setCount(Math.min(MAX_COUNT, count + 1))}>
          +
        </button>
      </div>
      <CatGrid width={width} height={height} />
    </div>
  );
};
