//import truffle assertions
const truffleAssert = require('truffle-assertions') 

// import the contract artifact
const CoShoe = artifacts.require('./CoShoe.sol')

contract('CoShoe', function (accounts) {
    let CoShoeInstance
  
   beforeEach(async function () {   
    CoShoeInstance = await CoShoe.new()
    })  
    
    
 // first test: 
 it('should mint 100 coins', async function () {
   await CoShoeInstance.mint(accounts[0], 100, { 'from': accounts[0] })
   let balance = await CoShoeInstance.balances(accounts[0])
   assert.equal(balance.toNumber(), 100, "100 tokens not minted")
 }) 

 // second test:
 it('should check ownership and set the correct variables', async function () {
   await CoShoeInstance.buyShoe(accounts[0] = msg.sender)
   let image = await CoShoeInstance.buyShoe(image)
   let name = await CoShoeInstance.buyShoe(name)
   let isSold = await CoShoeInstance.buyShoe(isSold) 
   await CoShoeInstance.buyShoe(isSold = shoesSold_)
   assert.equal(buyShoe, msg.sender, image, name, isSold,shoesSold_, "buyShoe function not implemented")
   }) 
 
 // third test: 
 it('should check that price is 0.5 ether', async function () {
   await truffleAssert.reverts(CoShoeInstance.buyShoe(if price != 0.5 ether) 
   let price = await CoShoeInstance.buyShoe(accounts[0], 0.5 ether)
   assert.equal(price, 0.5 ether, "price is not 0.5 ether")
   })
 
 //fourth test: 
 it('should see that checkPurchases returns the correct bools', async function () {
   await CoShoeInstance.checkPurchases(returns = True)
   let isSold = await CoShoeInstance.checkPurchases(isSold = True) 
    assert.equal(isSold, returns(True), "checkPurchases does not return True") 
  })

})