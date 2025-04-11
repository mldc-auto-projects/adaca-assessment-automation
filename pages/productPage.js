const { By, until } = require('selenium-webdriver');

class ProductPage {
  constructor(driver) {
    this.driver = driver;
    this.firstAddToCartButton = By.css('.inventory_item button.btn_primary');
    this.cartIcon = By.className('shopping_cart_link');
    this.removeButton = By.css('.cart_button');
    this.cartItem = By.className('cart_item');
  }

  async addFirstItemToCart() {
    await this.driver.wait(until.elementLocated(this.firstAddToCartButton), 5000);
    await this.driver.findElement(this.firstAddToCartButton).click();
  }

  async goToCart() {
    await this.driver.findElement(this.cartIcon).click();
  }

  async removeItemFromCart() {
    await this.driver.wait(until.elementLocated(this.removeButton), 5000);
    await this.driver.findElement(this.removeButton).click();

    // Wait until cart item disappears
    await this.driver.wait(async () => {
      const items = await this.driver.findElements(this.cartItem);
      return items.length === 0;
    }, 5000);
  }

  async isItemInCart() {
    const items = await this.driver.findElements(this.cartItem);
    return items.length > 0;
  }
}

module.exports = ProductPage;