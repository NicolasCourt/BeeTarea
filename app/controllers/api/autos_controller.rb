module Api
    class AutosController < ApplicationController
        protect_from_forgery with: :null_session # Para poder crear objetos sin necesidad de tokenv

        def index
            autos = Auto.all
            render json: AutoSerializer.new(autos).serialized_json
        end

        def show
            auto = Auto.find_by(id: params[:id])
            render json: AutoSerializer.new(autos).serialized_json
        end

        def create
            @auto = Auto.find_by(patente: params[:patente])
            if @auto.nil?  # Si la patente no existe, se debe crear un objeto nuevo
                auto = Auto.new(auto_params)  
                if auto.save
                    render json: AutoSerializer.new(auto).serialized_json
                else
                    render json: { error: auto.errors.messages }
                end
            else  # Si la patente existe, se debe actualizar el objeto
                if @auto.update(auto_params)
                    render json: AutoSerializer.new(auto).serialized_json
                else
                    render json: { error: auto.errors.messages }
                end
            end
        end

        private

        def auto_params
            params.require(:auto).permit(:patente, :lat, :lng)
        end
    end
end