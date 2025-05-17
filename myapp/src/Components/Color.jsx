function Color({ getColor }) {
  function ColorFunc(value) {
    getColor(value);
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter the color"
        onChange={(e) => {
          ColorFunc(e.target.value);
        }}
        class="color-input"
      />
    </div>
  );
}

export default Color;
