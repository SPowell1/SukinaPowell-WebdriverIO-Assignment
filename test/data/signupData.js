module.exports = [

  {//user with mismatched passwords
    fName: 'Louise',
    lName: 'Bennett',
    eAddress: 'louisebennett@gmail.com',
    pWord: 'LouisePoetry21',
    pWordConfirm: 'LouisePoety21',
    expectedUrl: 'https://magento.softwaretestingboard.com/customer/account/create/',
    message: 'Please enter the same value again.'
  },

  {//user with blank email address
    fName: 'Joan',
    lName: 'Hutchinson',
    eAddress: ' ',
    pWord: 'ThePoetJoan21',
    pWordConfirm: 'ThePoetJoan21',
    expectedUrl: 'https://magento.softwaretestingboard.com/customer/account/create/',
    message: 'This is a required field.'
  },
//Valid user info
  // {
  //   fName: 'Jane',
  //   lName: 'Austen',
  //   eAddress: 'janeaustenjn@gmail.com',
  //   pWord: 'Pride&Prejudice21',
  //   pWordConfirm: 'Pride&Prejudice21',
  //   expectedUrl: 'https://magento.softwaretestingboard.com/customer/account/'
  // },
  {
    fName: 'Ernest',
    lName: 'Hemmingway',
    eAddress: 'ernestHemmingwayerh@gmail.com',
    pWord: 'AFarewellToArms21',
    pWordConfirm: 'AFarewellToArms21',
    expectedUrl: 'https://magento.softwaretestingboard.com/customer/account/'
  },
  {
    fName: 'George',
    lName: 'Orwell',
    eAddress: 'georgeorwellaf1@gmail.com',
    pWord: 'AnimalFarm21',
    pWordConfirm: 'AnimalFarm21',
    expectedUrl: 'https://magento.softwaretestingboard.com/customer/account/'
  },

  // {
  //   fName: 'Claude',
  //   lName: 'Mckay',
  //   eAddress: 'claudemckaycla@gmail.com',
  //   pWord: 'IfIMustDie21',
  //   pWordConfirm: 'IfIMustDie21',
  //   expectedUrl: 'https://magento.softwaretestingboard.com/customer/account/',
  //   message: 'Thank you for registering with Fake Online Clothing Store.'
  // },

  // {
  //   fName: 'Toni',
  //   lName: 'Morrison',
  //   eAddress: 'tonimorrisonto@gmail.com',
  //   pWord: 'Beloved21',
  //   pWordConfirm: 'Beloved21',
  //   expectedUrl: 'https://magento.softwaretestingboard.com/customer/account/'
  // },

  


 



]