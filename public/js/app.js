'use strict';

console.log('Proof of life');

const attackModels = [];
const defendModels = [];
let attackModelTypeCounter = 1;

function AttackModelType() {
  this.name =  'modelType' + attackModelTypeCounter;
  this.attackModelTypeCounter = attackModelTypeCounter;
  this.modelCount = 0;
  this.shotsPerWeapon = 0;
  this.ballisticSkill = 'auto';
  this.weaponStrength = 0;
  this.weaponArmorPenetration = 0;
  this.weaponDamage = 0;

  attackModels.push(this);
}

AttackModelType.prototype.toHtml = function() {
  const $template = $('#attack-data-template').html();
  const $source = Handlebars.compile($template);
  return $source(this);
};


// USE A DYNAMICALLY CREATED ID!!!!
function userUpdate(event) {
  console.log(event.target.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[1].value);

}

document.getElementById('attack-form').addEventListener('change', userUpdate);










(function() {
  new AttackModelType();
  attackModelTypeCounter++;
})();

attackModels.forEach((attackModelType) => {
  $('#attack-form').append(attackModelType.toHtml());
});

// when user updates data, it auto updates that object
// when user clicks delete, it will delete that model type (if only one left it will clear everything)