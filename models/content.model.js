module.exports = mongoose => {
    const Content = mongoose.model(
      "pages",
      mongoose.Schema(
        {
          title: String,
          picture: String,
          text: String
        },
        { timestamps: true }
      )
    );
  
    return Content;
  };