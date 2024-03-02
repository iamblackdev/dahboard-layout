import { NavigateFunction } from "react-router-dom";
import { eyeIcon } from "../assets/svg";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime)



export const salesTableColumn = [
  {
    title: () => <span className="text-m font-medium text-black-400">Order ID</span>,
    dataIndex: "id",
    key: "id",
    render: (val: any) => (
      <span className="text-m font-medium text-black-500">{val}</span>
    ),
  },
  {
    title: () => <span className="text-m font-medium text-black-400">Product</span>,
    dataIndex: "order_items",
    key: "product",
    render: (val: any) => (
      <div className=" flex items-center gap-x-[8px]">
        <img className="rounded_img" src={val[0]?.product.featured_image} alt="product" />
        <div className="flex flex-col">
          <span className="text-m font-medium text-black-500">{val[0]?.product.name}</span>
          {val.length > 1 && <span className="text-s font-normal text-gray-500">+{val.length - 1} other products</span>}
        </div>
      </div>
    ),
  },

  {
    title: () => <span className="text-m font-medium text-black-400">Date</span>,
    dataIndex: "created_at",
    key: "total",
    render: (val: any) => (
      <span className="text-m font-medium text-gray-500">{dayjs(val).fromNow()}</span>
    ),
  },
  {
    title: () => <span className="text-m font-medium text-black-400">Customer</span>,
    dataIndex: "user",
    key: "customer",
    render: (val: any) => (
      <div className="flex flex-col gap-y-[4px]">
        <span className="text-m font-medium text-black-500">{val?.first_name} {val?.last_name}</span>
        <span className="text-s font-normal text-gray-500">{val.email}</span>
      </div>
    ),
  },
  {
    title: () => <span className="text-m font-medium text-black-400">Total</span>,
    dataIndex: "total_amount",
    key: "total",
    render: (val: any) => (
      <span className="text-m font-medium text-black-500">{val}</span>
    ),
  },
  {
    title: () => <span className="text-m font-medium text-black-400">Payment</span>,
    dataIndex: "payment_method",
    key: "total",
    render: (val: any) => (
      <span className="text-m font-medium text-gray-500">{val}</span>
    ),
  },
  {
    title: () => <span className="text-m font-medium text-black-400">Status</span>,
    dataIndex: "status",
    key: "status",
    render: (val: any) => (
      <>
        {val === "processing" && <span className="rounded-[8px] px-[10px] py-[4px] text-m font-semibold bg-orange-50 text-orange-500">Proccessing</span>}
        {val === "pending" && <span className="rounded-[8px] px-[10px] py-[4px] text-m font-semibold bg-orange-50 text-orange-500">Pending</span>}
        {val === "shiped" && <span className="rounded-[8px] px-[10px] py-[4px] text-m font-semibold bg-cyan-50 text-cyan-500">Shiped</span>}
        {val === "delivered" && <span className="rounded-[8px] px-[10px] py-[4px] text-m font-semibold bg-green-50 text-green-600">Delivered</span>}
      </>
    ),
  },
  {
    title: () => <span className="text_body_2 text_grey">Action</span>,
    dataIndex: "id",
    key: "action",
    render: (val: any) => (
      <span className="cursor-pointer">{eyeIcon}</span>
    ),
  },
];


export const salesData = [
  {
    "id": 1,
    "user_id": "3",
    "total_amount": "280000.00",
    "delivery_address": "My home address",
    "delivery_duration": "4-5 working days",
    "phone": "12345678900",
    "shipping_fee": "9.99",
    "delivery_method": "home or delivery_station",
    "coupon": "uekSJD",
    "payment_method": "card",
    "status": "processing",
    "created_at": "2023-12-11T06:36:45.000000Z",
    "updated_at": "2023-12-26T21:12:52.000000Z",
    "delivery_status": "processing",
    "reference": "jdnjfndjkfnmd",
    "payment_status": "",
    "user": {
      "id": 3,
      "first_name": "Miracle",
      "last_name": "Gabriel",
      "user_type": "user",
      "email": "sixpathdev2@gmail.com",
      "phone": "08141894423",
      "currency": "NGN",
      "country": "Nigeria",
      "email_verified_at": "2023-12-11T06:35:19.000000Z",
      "created_at": "2023-12-11T06:35:19.000000Z",
      "updated_at": "2023-12-11T06:35:19.000000Z",
      "account_status": "active",
      "photo": null,
      "system_currency": null
    },
    "order_items": []
  },
  {
    "id": 2,
    "user_id": "3",
    "total_amount": "0.00",
    "delivery_address": "My home address",
    "delivery_duration": "4-5 working days",
    "phone": "12345678900",
    "shipping_fee": "9.99",
    "delivery_method": "home or delivery_station",
    "coupon": "uekSJD",
    "payment_method": "card",
    "status": "processing",
    "created_at": "2023-12-11T07:08:17.000000Z",
    "updated_at": "2023-12-11T07:08:17.000000Z",
    "delivery_status": "processing",
    "reference": "llejrererwe",
    "payment_status": "",
    "user": {
      "id": 3,
      "first_name": "Miracle",
      "last_name": "Gabriel",
      "user_type": "user",
      "email": "sixpathdev2@gmail.com",
      "phone": "08141894423",
      "currency": "NGN",
      "country": "Nigeria",
      "email_verified_at": "2023-12-11T06:35:19.000000Z",
      "created_at": "2023-12-11T06:35:19.000000Z",
      "updated_at": "2023-12-11T06:35:19.000000Z",
      "account_status": "active",
      "photo": null,
      "system_currency": null
    },
    "order_items": []
  },
  {
    "id": 3,
    "user_id": "3",
    "total_amount": "280000.00",
    "delivery_address": "My home address",
    "delivery_duration": "4-5 working days",
    "phone": "12345678900",
    "shipping_fee": "9.99",
    "delivery_method": "home or delivery_station",
    "coupon": "uekSJD",
    "payment_method": "card",
    "status": "processing",
    "created_at": "2023-12-11T07:09:42.000000Z",
    "updated_at": "2023-12-11T07:09:42.000000Z",
    "delivery_status": "processing",
    "reference": "333jdjskdk",
    "payment_status": "",
    "user": {
      "id": 3,
      "first_name": "Miracle",
      "last_name": "Gabriel",
      "user_type": "user",
      "email": "sixpathdev2@gmail.com",
      "phone": "08141894423",
      "currency": "NGN",
      "country": "Nigeria",
      "email_verified_at": "2023-12-11T06:35:19.000000Z",
      "created_at": "2023-12-11T06:35:19.000000Z",
      "updated_at": "2023-12-11T06:35:19.000000Z",
      "account_status": "active",
      "photo": null,
      "system_currency": null
    },
    "order_items": []
  },
  {
    "id": 5,
    "user_id": "3",
    "total_amount": "1100000.00",
    "delivery_address": "My home address",
    "delivery_duration": "4-5 working days",
    "phone": "12345678900",
    "shipping_fee": "9.99",
    "delivery_method": "home or delivery_station",
    "coupon": "uekSJD",
    "payment_method": "card",
    "status": "pending",
    "created_at": "2023-12-27T14:12:13.000000Z",
    "updated_at": "2023-12-27T14:12:13.000000Z",
    "delivery_status": "pending",
    "reference": null,
    "payment_status": "",
    "user": {
      "id": 3,
      "first_name": "Miracle",
      "last_name": "Gabriel",
      "user_type": "user",
      "email": "sixpathdev2@gmail.com",
      "phone": "08141894423",
      "currency": "NGN",
      "country": "Nigeria",
      "email_verified_at": "2023-12-11T06:35:19.000000Z",
      "created_at": "2023-12-11T06:35:19.000000Z",
      "updated_at": "2023-12-11T06:35:19.000000Z",
      "account_status": "active",
      "photo": null,
      "system_currency": null
    },
    "order_items": [
      {
        "id": 3,
        "user_id": "3",
        "order_id": "5",
        "product_id": "17",
        "quantity": "1",
        "price": "220000.00",
        "created_at": "2023-12-27T14:12:13.000000Z",
        "updated_at": "2023-12-27T14:12:13.000000Z",
        "location": "Lagos, Nigeria",
        "item_color": null,
        "product": {
          "id": 17,
          "user_id": "2",
          "product_category_id": "3",
          "featured_image": "https:\/\/carroza-api.coinraccoon.com\/public\/images\/202312262302I.png",
          "name": "lenovo thinkpad",
          "amount": "220000.00",
          "average_rating": "0.00",
          "description": "this is a dummy description",
          "location": "Lagos, Nigeria",
          "payment_currency": "naira",
          "sizes": [
            "s",
            "m",
            "l",
            "xl",
            "xxl"
          ],
          "colors": [
            "red",
            "blue",
            "green"
          ],
          "weight": "2",
          "in_stock": "6",
          "status": "published",
          "sku": "sku-e6f81992",
          "created_at": "2023-12-26T23:02:32.000000Z",
          "updated_at": "2023-12-28T12:19:07.000000Z"
        }
      },
      {
        "id": 4,
        "user_id": "3",
        "order_id": "5",
        "product_id": "16",
        "quantity": "4",
        "price": "220000.00",
        "created_at": "2023-12-27T14:12:13.000000Z",
        "updated_at": "2023-12-27T14:12:13.000000Z",
        "location": "Lagos, Nigeria",
        "item_color": "#000000",
        "product": {
          "id": 16,
          "user_id": "2",
          "product_category_id": "3",
          "featured_image": "https:\/\/carroza-api.coinraccoon.com\/public\/images\/202312262302I.png",
          "name": "Dell Latitude 4530",
          "amount": "220000.00",
          "average_rating": "0.00",
          "description": "this is a dummy description",
          "location": "Lagos, Nigeria",
          "payment_currency": "naira",
          "sizes": [
            "s",
            "m",
            "l",
            "xl",
            "xxl"
          ],
          "colors": [
            "red",
            "blue",
            "green"
          ],
          "weight": "2",
          "in_stock": "6",
          "status": "published",
          "sku": "sku-738f8638",
          "created_at": "2023-12-26T23:02:16.000000Z",
          "updated_at": "2023-12-27T14:12:13.000000Z"
        }
      }
    ]
  }
]