var express = require('express')
var router = express.Router()

/* GET home page. */
router.post('/', function (req, res, next) {
  res.json({
    'result': 'true',
    'data': [
      {
        'id': '1205055498631200768',
        'createDate': '2019-12-12 17:23',
        'remarks': '',
        'createBy': 'system',
        'updateDate': '2019-12-12 17:23',
        'status': '0',
        'updateBy': 'system',
        'componentId': '',
        'componentName': '',
        'openType': '1',
        'chargeCondition': '1',
        'chargeConditionName': '收费',
        'propertyRightType': '1',
        'propertyRightTypeName': '环卫',
        'toiletType': '1',
        'toiletTypeName': '独立式',
        'flushType': '1',
        'flushTypeName': '水冲',
        'toiletGrade': '1',
        'toiletGradeName': '一类',
        'cabin': '1',
        'adminName': '11',
        'adminPhone': '1111',
        'code': '20191212000002',
        'name': 'testuser0102',
        'areaCode': '410103002001',
        'areaName': '民主路社区',
        'roadCode': '',
        'roadName': '',
        'isFacility': '1',
        'isFacilityName': '有',
        'componentStatus': ' ',
        'currentSituation': ' ',
        'address': '河南省郑州市中牟县豫兴街道大师傅',
        'basicToiletFacilityList': [],
        'basicComponentFacilityList': [],
        'gatewayId': '',
        'publicOffice': {
          'districtCode': '410103',
          'districtName': '二七区',
          'officeCode': '410103002',
          'officeName': '解放路街道办事处',
          'communityCode': '410103002001',
          'communityName': '民主路社区',
          'griddingCode': '',
          'griddingName': ''
        },
        'longitude': '113.649934999999999',
        'latitude': '34.7357849999999999',
        'length': 0,
        'score': 1.9,
        'dis': 7182.69599679
      },
      {
        'id': '1205055381090025472',
        'createDate': '2019-12-12 17:22',
        'remarks': '',
        'createBy': 'system',
        'updateDate': '2019-12-12 17:22',
        'status': '0',
        'updateBy': 'system',
        'componentId': '',
        'componentName': '',
        'openType': '1',
        'openStartDate': '16:00:00',
        'chargeCondition': '1',
        'chargeConditionName': '收费',
        'propertyRightType': '1',
        'propertyRightTypeName': '环卫',
        'toiletType': '1',
        'toiletTypeName': '独立式',
        'flushType': '1',
        'flushTypeName': '水冲',
        'toiletGrade': '1',
        'toiletGradeName': '一类',
        'cabin': '1',
        'adminName': '11',
        'adminPhone': '23',
        'code': '20191212000001',
        'name': 'test1',
        'areaCode': '410108',
        'areaName': '惠济区',
        'roadCode': '410103002132100001S',
        'roadName': '解放路街道办事处-解放路02-民主路至正兴街',
        'isFacility': '1',
        'isFacilityName': '有',
        'componentStatus': ' ',
        'currentSituation': ' ',
        'address': '河南省郑州市金水区东风路街道文劳路9号院郑州市公安局金水公安分局家属院',
        'basicToiletFacilityList': [],
        'basicComponentFacilityList': [],
        'gatewayId': '',
        'publicOffice': {
          'districtCode': '410108',
          'districtName': '惠济区',
          'officeCode': '',
          'officeName': '',
          'communityCode': '',
          'communityName': '',
          'griddingCode': '',
          'griddingName': ''
        },
        'longitude': '113.634048461899994',
        'latitude': '34.7312583922999991',
        'length': 0,
        'score': 0,
        'dis': 7998.24976188
      },
      {
        'id': '1203944048451231744',
        'createDate': '2019-12-09 15:46',
        'remarks': '222',
        'createBy': 'system',
        'updateDate': '2019-12-12 16:59',
        'status': '0',
        'updateBy': 'system',
        'componentId': '1174937381969817600',
        'componentName': '公交立杆',
        'openType': '0',
        'openStartDate': '15:00:00',
        'openEndDate': '17:00:00',
        'chargeCondition': '1',
        'chargeConditionName': '收费',
        'propertyRightType': '1',
        'propertyRightTypeName': '环卫',
        'toiletType': '1',
        'toiletTypeName': '独立式',
        'flushType': '1',
        'flushTypeName': '水冲',
        'toiletGrade': '1',
        'toiletGradeName': '一类',
        'cabin': '1',
        'adminName': '11',
        'adminPhone': '1111',
        'code': '20191209000001',
        'name': '111',
        'areaCode': '410103002001',
        'areaName': '民主路社区',
        'roadCode': '410103002204500001E',
        'roadName': '解放路街道办事处-民主路01-自由路至解放路',
        'isFacility': '1',
        'isFacilityName': '有',
        'initialDate': '2019-12-11 00:00:00',
        'changeDate': '2019-12-09 00:00:00',
        'componentStatus': '3',
        'componentStatusName': '丢失',
        'currentSituation': '0',
        'currentSituationName': '作废',
        'address': '河南省郑州市金水区祭城路街道祭城社区心怡路55号院',
        'basicToiletFacilityList': [],
        'basicComponentFacilityList': [],
        'gatewayId': '1111',
        'publicOffice': {
          'districtCode': '410103',
          'districtName': '二七区',
          'officeCode': '410103002',
          'officeName': '解放路街道办事处',
          'communityCode': '410103002001',
          'communityName': '民主路社区',
          'griddingCode': '',
          'griddingName': ''
        },
        'longitude': '113.771094909310364',
        'latitude': '34.7819466218213975',
        'length': 0,
        'score': 0,
        'dis': 10272.20145204
      }
    ],
    'message': '查询公厕列表成功！'
  })
})

module.exports = router
