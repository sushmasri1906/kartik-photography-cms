export default {
  name: 'carouselPhoto',
  title: 'Carousel Photo',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) =>
        Rule.required().custom((image: any) => {
          if (image && image.asset && image.asset.metadata) {
            const {width, height} = image.asset.metadata.dimensions
            if (width > height) {
              return true
            }
            return 'Please upload a wider image (landscape orientation).'
          }
          return true
        }),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'photoCategory'}],
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
  ],
}
