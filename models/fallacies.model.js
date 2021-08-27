module.exports = mongoose => {
    const Fallacy = mongoose.model(
      "logical_fallacies",
      mongoose.Schema(
        {
          name: String,
          type: String,
          category: String,
          description: String,
          example : String,
          picture: String,
          read_more: String,
          signs: Array
        },
        { timestamps: true }
      )
    );
  
    return Fallacy;
  };