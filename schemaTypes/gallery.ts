export default {
  name: 'galleryAlbum',
  title: 'Gallery Album',
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
      title: 'Category',
      type: 'reference',
      to: [{type: 'photoCategory'}],
    },
    {
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
      validation: (Rule: any) => Rule.required().min(1).error('At least one image is required.'),
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
  ],
}
