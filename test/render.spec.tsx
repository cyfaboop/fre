import { h } from '../src/index'
import { test } from 'zora'
import {diff} from './diff'
import {update,handler,style, dom} from './update'

test('render', async (t) => {
  await diff(t)
  await update(t)
  await handler(t)
  await style(t)
  await dom(t)
})