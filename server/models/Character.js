const { Schema, model } = require('mongoose');

const characterSchema = new Schema({
    characterName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    strength: {
      type: Int,
      required: true,
      unique: true,
      trim: true,
    },
    dexterity: {
      type: Int,
      required: true,
      unique: true,
      trim: true,
    },
    constitution: {
      type: Int,
      required: true,
      unique: true,
      trim: true,
    },
    intelligence: {
      type: Int,
      required: true,
      unique: true,
      trim: true,
    },
    wisdom: {
      type: Int,
      required: true,
      unique: true,
      trim: true,
    },
    charisma: {
      type: Int,
      required: true,
      unique: true,
      trim: true,
    },
});

const Character = model('Character', characterSchema);

module.exports = Character;
