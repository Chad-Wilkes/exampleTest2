import { $ } from '@wdio/globals'
import Page from './page.js';

class Products extends Page {
    get addToCart () {
        return $(`#add-to-cart-sauce-labs-backpack`);
    }

    async addItemToCart (itemName) {
        await this.addToCart.click();
    }

  open () {
        return super.open();
    }
}

export default new Products();
