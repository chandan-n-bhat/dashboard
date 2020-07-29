# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Billed(models.Model):
    id = models.CharField(max_length=20,primary_key=True)
    vendor_id = models.CharField(db_column='Vendor_id',max_length=20,blank=True, null=True)
    vendor_name = models.CharField(db_column='Vendor_Name',max_length=30 ,blank=True, null=True)
    item_name = models.CharField(db_column='Item_Name', max_length=20,blank=True, null=True)
    item_id = models.CharField(db_column='Item_id', max_length=20,blank=True, null=True)
    grossweight = models.CharField(db_column='Grossweight', max_length=20,blank=True, null=True)
    mtrs = models.CharField(db_column='Mtrs', max_length=20, blank=True, null=True)
    corewt = models.CharField(db_column='Corewt', max_length=20, blank=True, null=True)
    rollno = models.CharField(db_column='Rollno', max_length=20, blank=True, null=True)
    created_by = models.CharField(db_column='Created_By', max_length=20, blank=True, null=True)
    created_dt = models.CharField(db_column='Created_Dt', max_length=20, blank=True, null=True)
    invoice_no = models.CharField(db_column='Invoice_No', max_length=20, blank=True, null=True)
    invoice_by = models.CharField(db_column='Invoice_By', max_length=20, blank=True, null=True)
    invoice_dt = models.CharField(db_column='Invoice_Dt', max_length=20, blank=True, null=True)
    rate = models.CharField(db_column='Rate', max_length=20, blank=True, null=True)
    updated_by = models.CharField(db_column='Updated_By', max_length=20, blank=True, null=True)
    updated_dt = models.CharField(db_column='Updated_Dt', max_length=20, blank=True, null=True)
    confirm_rate = models.CharField(db_column='Confirm_Rate', max_length=20, blank=True, null=True)
    confirm_by = models.CharField(db_column='Confirm_By', max_length=20, blank=True, null=True)
    confirm_dt = models.CharField(db_column='Confirm_Dt', max_length=20, blank=True, null=True)
    sales_confirm = models.CharField(db_column='Sales_Confirm', max_length=20, blank=True, null=True)
    sales_confirm_by = models.CharField(db_column='Sales_Confirm_By', max_length=20, blank=True, null=True)
    sales_confirm_dt = models.CharField(db_column='Sales_Confirm_Dt', max_length=20, blank=True, null=True)
    freight = models.CharField(db_column='Freight', max_length=20, blank=True, null=True)
    billed = models.CharField(db_column='Billed', max_length=20, blank=True, null=True)
    billed_id = models.CharField(db_column='Billed_Id', max_length=20, blank=True, null=True)
    billed_by = models.CharField(db_column='Billed_By', max_length=20, blank=True, null=True)
    billed_dt = models.CharField(db_column='Billed_Dt', max_length=20, blank=True, null=True)
    freight_val = models.CharField(db_column='Freight_val', max_length=20, blank=True, null=True)
    o_invoice_no = models.CharField(db_column='O_Invoice_no', max_length=20, blank=True, null=True)
    o_bill_date = models.CharField(db_column='O_Bill_date', max_length=20, blank=True, null=True)
    o_mtrs_rate = models.CharField(db_column='O_Mtrs_rate', max_length=20, blank=True, null=True)
    mtrsrate = models.CharField(db_column='Mtrsrate', max_length=20, blank=True, null=True)
    unit = models.CharField(db_column='Unit', max_length=20, blank=True, null=True)
    order_id = models.CharField(db_column='Order_id', max_length=20, blank=True, null=True)
    moveto = models.CharField(db_column='Moveto', max_length=20, blank=True, null=True)
    billingnumber = models.CharField(db_column='BillingNumber', max_length=20, blank=True, null=True)
    trucknumber = models.CharField(db_column='TruckNumber', max_length=20, blank=True, null=True)
    received = models.CharField(db_column='Received',max_length=20, blank=True, null=True)
    state = models.CharField(db_column='State', max_length=20, blank=True, null=True)
    anex_confirm = models.CharField(db_column='Anex_Confirm', max_length=20, blank=True, null=True)
    anex_confirm_by = models.CharField(db_column='Anex_Confirm_By', max_length=20, blank=True, null=True)
    anex_confirm_dt = models.CharField(db_column='Anex_Confirm_Dt', max_length=20, blank=True, null=True)
    bunit = models.CharField(db_column='BUnit', max_length=20, blank=True, null=True)  # Field name made lowercase.
    vehicleno_by = models.CharField(db_column='VehicleNo_By', max_length=20, blank=True, null=True)  # Field name made lowercase.
    vehicleno_dt = models.CharField(db_column='VehicleNo_Dt', max_length=20, blank=True, null=True)  # Field name made lowercase.
    vehicleno_id = models.CharField(db_column='VehicleNo_ID', max_length=20, blank=True, null=True)  # Field name made lowercase.
    vehicleno = models.CharField(db_column='VehicleNo', max_length=20, blank=True, null=True)  # Field name made lowercase.
    payment_by = models.CharField(db_column='Payment_By', max_length=20, blank=True, null=True)  # Field name made lowercase.
    payment_dt = models.CharField(db_column='Payment_Dt', max_length=20, blank=True, null=True)  # Field name made lowercase.
    payment = models.CharField(db_column='Payment', max_length=20, blank=True, null=True)  # Field name made lowercase.
    audit = models.CharField(db_column='Audit', max_length=20, blank=True, null=True)  # Field name made lowercase.
    audit_by = models.CharField(db_column='Audit_By', max_length=20, blank=True, null=True)  # Field name made lowercase.
    audit_dt = models.CharField(db_column='Audit_Dt', max_length=20, blank=True, null=True)  # Field name made lowercase.
    payment_app = models.CharField(db_column='Payment_App', max_length=20, blank=True, null=True)  # Field name made lowercase.
    payment_app_by = models.CharField(db_column='Payment_App_By', max_length=20, blank=True, null=True)  # Field name made lowercase.
    payment_app_dt = models.CharField(db_column='Payment_App_Dt', max_length=20, blank=True, null=True)  # Field name made lowercase.
    loading = models.CharField(db_column='Loading', max_length=20, blank=True, null=True)  # Field name made lowercase.
    loading_by = models.CharField(db_column='Loading_By', max_length=20, blank=True, null=True)  # Field name made lowercase.
    loading_dt = models.CharField(db_column='Loading_Dt', max_length=20, blank=True, null=True)  # Field name made lowercase.
    billingamount = models.CharField(db_column='BillingAmount', max_length=20, blank=True, null=True)  # Field name made lowercase.
    audit_verified = models.CharField(db_column='Audit_Verified', max_length=20, blank=True, null=True)  # Field name made lowercase.
    audit_verified_by = models.CharField(db_column='Audit_Verified_By', max_length=20, blank=True, null=True)  # Field name made lowercase.
    audit_verified_dt = models.CharField(db_column='Audit_Verified_Dt', max_length=20, blank=True, null=True)  # Field name made lowercase.
    weight_verified = models.CharField(db_column='Weight_Verified', max_length=20, blank=True, null=True)  # Field name made lowercase.
    weight_verified_by = models.CharField(db_column='Weight_Verified_By', max_length=20, blank=True, null=True)  # Field name made lowercase.
    weight_verified_dt = models.CharField(db_column='Weight_Verified_Dt', max_length=20, blank=True, null=True)  # Field name made lowercase.
    cvendor_id = models.CharField(db_column='CVendor_id', max_length=20, blank=True, null=True)  # Field name made lowercase.
    cchanged_by = models.CharField(db_column='CChanged_By', max_length=20, blank=True, null=True)  # Field name made lowercase.
    cchanged_dt = models.CharField  (db_column='CChanged_Dt', max_length=20, blank=True, null=True)  # Field name made lowercase.

    def __str__(self):
        return "Id: " + str(self.id)

    class Meta:
        db_table = 'new_bills'

