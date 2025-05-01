export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    {name: 'title', title: 'Gallery Title', type: 'string'},
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
    },
    {
      name: 'category',
      title: 'Photo Category',
      type: 'reference',
      to: [{type: 'photoCategory'}],
    },
    {
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    },
    {
      name: 'isFeatured',
      title: 'Use First 3 Images as Hero Carousel',
      type: 'boolean',
    },
  ],
}
