ALTER TABLE `online-academy-db`.`category` 
ADD COLUMN `status` INT NULL DEFAULT 1 AFTER `image`;

ALTER TABLE `online-academy-db`.`sub_category` 
ADD COLUMN `status` INT NULL DEFAULT 1 AFTER `updated_date`;

ALTER TABLE `online-academy-db`.`category_link` 
CHANGE COLUMN `id` `id` INT NOT NULL AUTO_INCREMENT ;

ALTER TABLE `online-academy-db`.`course` 
ADD INDEX `FK_category_link_idx` (`category_link_id` ASC) VISIBLE;
;
ALTER TABLE `online-academy-db`.`course` 
ADD CONSTRAINT `FK_category_link`
  FOREIGN KEY (`category_link_id`)
  REFERENCES `online-academy-db`.`category_link` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `online-academy-db`.`category_link` 
DROP FOREIGN KEY `FK_sub_category`;
ALTER TABLE `online-academy-db`.`category_link` 
DROP INDEX `FK_sub_category_idx` ;
;

ALTER TABLE `online-academy-db`.`sub_category` 
CHANGE COLUMN `id` `id` INT NOT NULL AUTO_INCREMENT ;

ALTER TABLE `online-academy-db`.`category_link` 
ADD INDEX `Fk_sub_category_idx` (`sub_category_id` ASC) VISIBLE;
;
ALTER TABLE `online-academy-db`.`category_link` 
ADD CONSTRAINT `Fk_sub_category`
  FOREIGN KEY (`sub_category_id`)
  REFERENCES `online-academy-db`.`sub_category` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

  UPDATE `online-academy-db`.`user` SET `password` = '$2b$10$/JfF8kFpolRGZRlCtOxqnubIc4Do7Uoz8fksNmXGDdL8nkpb07fuy' WHERE (`id` = '1');
UPDATE `online-academy-db`.`user` SET `password` = '$2b$10$/JfF8kFpolRGZRlCtOxqnubIc4Do7Uoz8fksNmXGDdL8nkpb07fuy' WHERE (`id` = '2');
UPDATE `online-academy-db`.`user` SET `password` = '$2b$10$/JfF8kFpolRGZRlCtOxqnubIc4Do7Uoz8fksNmXGDdL8nkpb07fuy' WHERE (`id` = '3');

ALTER TABLE `online-academy-db`.`invoice` 
DROP FOREIGN KEY `FK_invoice_coupon`,
DROP FOREIGN KEY `FK_invoice_invoice_status`,
DROP FOREIGN KEY `FK_invoice_payment_type`;
ALTER TABLE `online-academy-db`.`invoice` 
CHANGE COLUMN `invoice_status_id` `invoice_status_id` INT NOT NULL DEFAULT 1 ,
CHANGE COLUMN `payment_type_id` `payment_type_id` INT NOT NULL DEFAULT 8 ,
CHANGE COLUMN `coupon_id` `coupon_id` INT NOT NULL DEFAULT 1 ;
ALTER TABLE `online-academy-db`.`invoice` 
ADD CONSTRAINT `FK_invoice_coupon`
  FOREIGN KEY (`coupon_id`)
  REFERENCES `online-academy-db`.`coupon` (`id`),
ADD CONSTRAINT `FK_invoice_invoice_status`
  FOREIGN KEY (`invoice_status_id`)
  REFERENCES `online-academy-db`.`invoice_status` (`id`),
ADD CONSTRAINT `FK_invoice_payment_type`
  FOREIGN KEY (`payment_type_id`)
  REFERENCES `online-academy-db`.`payment_type` (`id`);



