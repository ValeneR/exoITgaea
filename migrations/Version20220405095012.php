<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220405095012 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE possessions ADD id_client_id INT NOT NULL');
        $this->addSql('ALTER TABLE possessions ADD CONSTRAINT FK_8325018899DED506 FOREIGN KEY (id_client_id) REFERENCES client (id)');
        $this->addSql('CREATE INDEX IDX_8325018899DED506 ON possessions (id_client_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE possessions DROP FOREIGN KEY FK_8325018899DED506');
        $this->addSql('DROP INDEX IDX_8325018899DED506 ON possessions');
        $this->addSql('ALTER TABLE possessions DROP id_client_id');
    }
}
