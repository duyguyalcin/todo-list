import Gorev from "./gorev.model.js";


//veri çek
export const listGorev =async (req, res) => {
    try{
        const gorev = await Gorev.find({});
        res.status(200).json(gorev);
    }catch(error){
        res.status(404).json({message: error.message})
      }
};



//görev ekleme
export const gorevEkle = async (req, res) =>{
    
    const gorevekle = new Gorev(req.body)
    try{
        await gorevekle.save();
        res.status(201).json(gorevekle)
    }catch(error){
        res.status(409).json({message: error.message})
      }
    
}


//bütün görevleri getir
export const getGorev= async (req, res) => {
    try{
        const gorev = await Gorev.findById(req.params.id)
        console.log()
        res.json(gorev);
    }catch (error){
        res.status(500).json({message: error.message});
    }
};

//görev güncelleme
export const gorevGuncelle = async (req,res) => {
    try{
        const gorevvGuncelle =await Gorev.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.json(gorevGuncelle);
    }catch (error){
        res.status(400).json({message:error.message});
    }
};


//görev silme
export const gorevSil = async (req, res) =>{
    try{
        const gorevvGuncelle =await Gorev.findByIdAndDelete(req.params.id, req.body, {new:true});
        res.json(gorevSil);
    }catch (error){
        res.status(400).json({message:error.message});
    }
  };
  