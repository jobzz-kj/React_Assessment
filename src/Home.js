function Home() {
  return (
    <>
      <div className="header">
        <img
          className="image"
          src="data:image/jpeg;base64,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"
        />
        <h1>About Us!</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </>
  );
}

export default Home;