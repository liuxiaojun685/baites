<template>
  <main class="uc-slider-edit">
    <uc-form :rForm="rForm" :dForm="dForm" :rrules="rules" ref="sliderForm"></uc-form>
  </main>
</template>

<script>
  import {CONSTANT, reg} from '../../util/constant';
  import { _updateSlideshow, _getSlideShow } from '../../util/ajax';
  import Form from '~packages/form/form.vue';

  export default {
    data () {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入轮播图序号'));
        } else if (!reg.number1.test(value) || value.length > 8) {
          callback(new Error('轮播图序号只能是数字，长度为1~8'));
        } else {
          callback();
        }
      };
      var dForm = [];

      //  图片序号
      dForm.push({
        type: 'input',
        key: 'sequence',
        label: '轮播图片序号',
        placeholder: '请输入轮播图片序号',
        disabled: false
      });
      //  上传图片
      dForm.push({
        type: 'uploadfile',
        key: 'picture',
        uploaderFilesObj: {
          label: '上传图片',
          required: true,
          selectId: 'qiniu_uploader',
          dropId: 'qiniu_container',
          total: 1,
          mimeTypes: [{title: 'Image files', extensions: 'jpg,jpeg,gif,png'}],
          multiSelection: false,
          files: [],
          showTip: false,
          tips: '请选择上传图片'
        }
      });
      //  提交按钮
      dForm.push({
        type: 'button',
        btnType: 'primary',
        key: 'button',
        label: '确定',
        click: () => {
          this.formSubmit(this);
        }
      });
      return {
        rForm: {
          sequence: '',
          picture: ''
        },
        dForm: dForm,
        rules: {
          sequence: [
            { required: true, message: '轮播图序号不能为空', trigger: 'blur, change' },
            { validator: validatePass, trigger: 'blur, change' }
          ],
          picture: [
            { required: false }
          ]
        }
      };
    },
    components: {
      UcForm: Form
    },
    methods: {
      getSlideShow () {
        var _this = this;

        var params = {
          id: _this.$route.params.id
        };

        _getSlideShow(params).then(function (response) {
          var data = response.data;

          if (data.status) {
            _this.dealData(data.data);
          } else {
            CONSTANT.methods.tips(data.error_msg || '获取轮播图信息失败!', '提示');
          }
        }).catch(function (res) {
          CONSTANT.methods.tips(res || '获取轮播图信息异常!', '提示');
        });
      },
      dealData (data) {
        this.rForm.sequence = data.sequence;
        this.dForm[1].uploaderFilesObj.files.push({url: data.picture});
      },
      formSubmit (_this) {
        var uploadfile = _this.$refs.sliderForm.$refs.uploadfile[0];
        var files = uploadfile.uploaderFiles.files;
        var flag = false;
        var params = {};

        if (files.length <= 0) {
          flag = false;
          uploadfile.uploaderFiles.showTip = true;
        } else {
          flag = true;
          uploadfile.uploaderFiles.showTip = false;
        }

        _this.$refs.sliderForm.$refs.ruleForm.validate(valid => {
          if (valid && flag) {
            params = {
              id: _this.$route.params.id,
              picture: files[0].url.split('?imageView2')[0],
              sequence: _this.$refs.sliderForm.ruleForm.sequence
            };
            _updateSlideshow(params).then(function (response) {
              var data = response.data;

              if (data.status) {
                location.href = location.origin + '/#/sliderlist';
              } else {
                CONSTANT.methods.tips(data.error_msg || '新增轮播图成功!', '提示');
              }
            }).catch(function (res) {
              CONSTANT.methods.tips(res || '新增轮播图异常!', '提示');
            });

          } else {
            console.log('error submit!!');
          }
        });
      }
    },
    mounted () {
      this.getSlideShow();
    }
  };
</script>
<style>
  .el-table .cell{
    text-align: center!important;
  }
</style>
<style lang="scss" scoped>

</style>