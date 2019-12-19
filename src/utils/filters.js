import {numberic} from './tools';

/**
 * @desc 千分位过滤器
 * @param {} vue 
 */
export default function (vue) {
    vue.filter('numberic', numberic(3));
}