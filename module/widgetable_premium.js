let premium = {
  "subscriber": {
    "subscriptions": {
      "com.widgetable.premium.yearly": {
        "expires_date": "2099-12-31T23:59:59Z",
        "purchase_date": "2023-01-01T00:00:00Z",
        "original_purchase_date": "2023-01-01T00:00:00Z",
        "ownership_type": "PURCHASED"
      }
    },
    "entitlements": {
      "premium": {
        "expires_date": "2099-12-31T23:59:59Z",
        "product_identifier": "com.widgetable.premium.yearly",
        "purchase_date": "2023-01-01T00:00:00Z"
      }
    }
  }
};

$done({ body: JSON.stringify(premium) });
