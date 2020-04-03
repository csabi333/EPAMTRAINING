import { Event } from '../utils/event.dispatcher.js';

export class ProductsModel {

  constructor() {
    this.onSearch = new Event();
  }

  getAllProducts() {
    return this.products;
  }

  search(params) {
    // build url from params, send request
    console.log('notify');
    this.onSearch.notify(this.searchResult);
  }

  products = [
      {
        productId: "b4ac7610-6c56-11ea-8cad-8fc046ed7711",
        name: "Sint qui mollit voluptate",
        description: "Enim aute commodo aute reprehenderit fugiat fugiat voluptate magna reprehenderit non pariatur esse incididunt. Excepteur pariatur ut consectetur fugiat nulla aliqua elit ut. Reprehenderit dolor nostrud ipsum mollit qui excepteur do cupidatat incididunt ad tempor sint elit fugiat. Duis nulla elit proident enim mollit sint ullamco duis laborum Lorem. Lorem anim cupidatat ea ullamco duis aliquip ad exercitation eiusmod et ullamco consectetur elit enim.",
        quantity: 9,
        price: 803.35,
        categories: ["TV, Audio & Surveillance", "Video Games & Consoles"],
        images: ["https://placeimg.com/640/480/tech/4", "https://placeimg.com/640/480/tech/2", "https://placeimg.com/640/480/tech/2", "https://placeimg.com/640/480/tech/4", "https://placeimg.com/640/480/tech/0"]
      },
      {
        productId: "b4ac4f00-6c56-11ea-8cad-8fc046ed7711",
        name: "Fugiat dolore quis",
        description: "Nostrud et nisi ex consequat Lorem. Ullamco sunt culpa fugiat eu qui fugiat esse Lorem nulla mollit nisi excepteur labore laborum. Labore mollit amet ea mollit sint nulla quis elit laborum aliquip irure. Deserunt dolor pariatur elit aliqua voluptate veniam. Nulla nostrud ea exercitation ea labore. Voluptate aliquip tempor occaecat est do anim irure elit irure ex laborum occaecat.",
        quantity: 6,
        price: 402.07,
        categories: ["Cellphones & Accessories"],
        images: ["https://placeimg.com/640/480/tech/3", "https://placeimg.com/640/480/tech/3", "https://placeimg.com/640/480/tech/2", "https://placeimg.com/640/480/tech/0"]
      },
      {
        productId: "b4aceb40-6c56-11ea-8cad-8fc046ed7711",
        name: "In dolore",
        description: "Dolor reprehenderit quis ipsum ex ut velit. Do amet fugiat occaecat magna. Aliqua culpa anim occaecat ad aliqua eu voluptate ex deserunt et cupidatat consequat. Duis voluptate ut do consequat ut ullamco voluptate culpa fugiat et aliqua et in ex. Sunt cupidatat aliquip labore ad ad commodo ullamco magna incididunt anim commodo adipisicing consectetur do. Officia ut minim nulla ullamco.",
        quantity: 7,
        price: 323.46,
        categories: ["Cellphones & Accessories"],
        images: ["https://placeimg.com/640/480/tech/0"]
      }
    ];

    searchResult = [
      {
        productId: "b4ac7610-6c56-11ea-8cad-8fc046ed7711",
        name: "Enim aute commodo aute",
        description: "Enim aute commodo aute reprehenderit fugiat fugiat voluptate magna reprehenderit non pariatur esse incididunt. Excepteur pariatur ut consectetur fugiat nulla aliqua elit ut. Reprehenderit dolor nostrud ipsum mollit qui excepteur do cupidatat incididunt ad tempor sint elit fugiat. Duis nulla elit proident enim mollit sint ullamco duis laborum Lorem. Lorem anim cupidatat ea ullamco duis aliquip ad exercitation eiusmod et ullamco consectetur elit enim.",
        quantity: 9,
        price: 369.12,
        categories: ["TV, Audio & Surveillance", "Video Games & Consoles"],
        images: ["https://placeimg.com/640/480/tech/1"]
      },
      {
        productId: "b4ac4f00-6c56-11ea-8cad-8fc046ed7711",
        name: "Fugiat dolore quis",
        description: "Nostrud et nisi ex consequat Lorem. Ullamco sunt culpa fugiat eu qui fugiat esse Lorem nulla mollit nisi excepteur labore laborum. Labore mollit amet ea mollit sint nulla quis elit laborum aliquip irure. Deserunt dolor pariatur elit aliqua voluptate veniam. Nulla nostrud ea exercitation ea labore. Voluptate aliquip tempor occaecat est do anim irure elit irure ex laborum occaecat.",
        quantity: 6,
        price: 523.62,
        categories: ["Cellphones & Accessories"],
        images: ["https://placeimg.com/640/480/tech/2"]
      }
    ];
}