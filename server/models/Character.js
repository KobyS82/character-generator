const { Schema, model } = require('mongoose');

const characterSchema = new Schema({
    characterName: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    strength: {
      type: Number,
      required: true,
      unique: false,
      trim: true,
    },
    dexterity: {
      type: Number,
      required: true,
      unique: false,
      trim: true,
    },
    constitution: {
      type: Number,
      required: true,
      unique: false,
      trim: true,
    },
    intelligence: {
      type: Number,
      required: true,
      unique: false,
      trim: true,
    },
    wisdom: {
      type: Number,
      required: true,
      unique: false,
      trim: true,
    },
    charisma: {
      type: Number,
      required: true,
      unique: false,
      trim: true,
    },
});

const Character = model('Character', characterSchema);

module.exports = Character;