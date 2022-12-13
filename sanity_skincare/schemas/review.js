export default {
    name: 'review',
    title: 'Review',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },

        {
            name: 'customerName',
            title: 'Customer Name',
            type: 'string',
        },
        
        {
            name: 'productLine',
            title: 'Product Line',
            type: 'string',
        },
        
        {
            name: 'productName',
            title: 'Product Name',
            type: 'string',
        },

        {
            name: 'details',
            title: 'Details',
            type: 'string',
        }
    ]
}