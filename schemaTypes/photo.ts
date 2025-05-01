export default {
  name: 'photo',
  title: 'Photo',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'photoCategory'}],
    },
    {
      name: 'isFeatured',
      title: 'Featured in Category Carousel',
      type: 'boolean',
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
  ],
}
