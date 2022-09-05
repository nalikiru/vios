import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import comment from './comment'
import user from './user'
import postedBy from './postedBy'
import post from './post'


export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    user,post,comment,postedBy
  ]),
})
