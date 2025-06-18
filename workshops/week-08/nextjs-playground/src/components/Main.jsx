// This is a server component (by default)

import Button from "./Button";

export default function Main() {
  return (
    <>
      <h1>Content</h1>
      <div>
        <h2>Content 1</h2>
        <p>Content text</p>
        <Button />
      </div>
      <div>
        <h1>Content</h1>
        <h2>Content 2</h2>
        <p>Content text</p>
        <Button />
      </div>
      <div>
        <h1>Content</h1>
        <h2>Content 3</h2>
        <p>Content text</p>
        <Button />
      </div>
    </>
  );
}
