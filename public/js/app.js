'use strict';

const attackModels = [];
const defendModels = [];

// Calculates total number of wounds //
const totalNumberOfWounds = () => {
    return totalNumberOfHits() * totalToWoundPercentage();
  };

// Calculates total number of hits //
const totalNumberOfHits = () => {
  return totalShots() * totalToHitPercentage();
};

// Calculates total shots //
const totalShots = (i) => {
  return attackModels[i].modelCount * attackModels[i].shotsPerWeapon;
};

// Calculates total percentage to hit //
const totalToHitPercentage = (i) => {
  return ballisticSkillToHit(i) + modifierToHit() + rerollToHit();
};

// Translates a ballistic skill to its percentage to successfully hit //
const ballisticSkillToHit = (i) => {
  switch (attackModels[i].ballisticSkill) {
  case 2:
    return (5/6);
  case 3:
    return (4/6);
  case 4:
    return (3/6);
  case 5:
    return (2/6);
  case 6:
    return (1/6);
  case 'auto':
    return (6/6);
  }
};

const modifierToHit = () => {
  return 0;
};

const rerollToHit = () => {
  return 0;
};


// Calculates total percentage to wound //
const totalToWoundPercentage = (i) => {
  return unmodifiedToWound(i) + modifierToWound() + rerollToWound();
};

// Translates strength vs toughness as a percentage to successfully wound //
const unmodifiedToWound = (atkStrength, defToughness) => {
  switch (atkStrength, defToughness) {
  case (atkStrength >= (defToughness * 2)):
    return (5/6);
  case (atkStrength > defToughness):
    return (4/6);
  case (atkStrength === defToughness):
    return (3/6);
  case (atkStrength <= defToughness / 2):
    return (1/6);
  case (atkStrength < defToughness):
    return (2/6);
  case 'auto':
    return (6/6);
  }
};

const modifierToWound = () => {
  return 0;
};

const rerollToWound = () => {
  return 0;
};
