package tn.biat.model;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Operations")
@Data
@NoArgsConstructor
//@AllArgsConstructor : Non necessaire à cause de la clé automatique
public class Operation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idOperation;
    @Temporal(TemporalType.TIME)
    private Date dateOperation;
    private BigDecimal montantOpertaion;
    private String sens; //Débit ou Crédit

    @JsonIgnore
    @ManyToOne
    private Compte compte;
}
