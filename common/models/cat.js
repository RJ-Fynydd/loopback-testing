'use strict';

module.exports = function(Cat) {
    Cat.validatesUniquenessOf('name', {message: 'A cat with this name already exists.'});
};
